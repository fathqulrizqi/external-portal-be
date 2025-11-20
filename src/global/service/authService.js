import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { registerValidation, loginValidation } from '../validation/authValidation.js'; 
import { ebidding } from '../../config/database.js';
import mailerTemplate from '../../utils/mailerTemplate.js';
import { ResponseError } from '../../error/responseError.js';


const register = async (payload) => {
  await registerValidation.validateAsync(payload, {
      abortEarly: false, 
    });
  
    

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(payload.password, salt);

  const newUser = await ebidding.User.create({
    data : {
        email: payload.email,
        password: hashedPassword,
        sessionExpireDate : new Date()
    }
    });
  await ebidding.Profile.create({
    data : {
        userId : newUser.userId,
        urlImage: payload.urlImage,
        fullName: payload.fullName,
        companyName: payload.companyName,
        description: payload.description,
        npwp: payload.npwp,
        deedNumber: payload.deedNumber,
        establishedDate: new Date(payload.establishedDate),
        npwpUrl: payload.npwpUrl,
        deedUrl: payload.deedUrl,
        segmentId: parseInt(payload.segmentId, 10),
        companyAddress : payload.companyAddress,
        companyPhone : payload.companyPhone,
        website : payload.website
    }
  });
  await ebidding.userHasRoleAccess.create({
    data :{
      userId : newUser.userId,
      roleId : 1,
      accessId : 1,
    }
  })

  await mailerTemplate.verifikasiRegistrasi(newUser.userId,payload.email);
  
  return newUser;
};

const login = async (payload,requestContext) => {

try {
    await loginValidation.validateAsync(payload, {
      abortEarly: false, 
    });
  } catch (error) {
    const firstError = error.details[0].message;
    throw new ResponseError(401,firstError);
  }

  const user = await ebidding.User.findUnique({
    where: { email: payload.email },
    include : { 
      UserHasRoleAccess : {
        include :{
          role : true,
          access : true,
        }
      }
    }
  });
  if (!user || user.isActive == false) {
    const authError = !user ? 'Invalid email or password' : 'Your account is not active.';
     throw new ResponseError(401,authError);
  }


  const isMatch = await bcrypt.compare(payload.password, user.password);
  
  if (!isMatch) {
    throw new ResponseError(401,'Invalid email or password');
  }

  const deviceUuid = payload.clientDeviceUuid;
  const userId = user.userId;

  try {
    const existingDevice = await ebidding.LinkedDevice.findUnique({
      where: { userId: userId, clientDeviceUuid: deviceUuid }
    });

    
    if (existingDevice == null) {
      console.log(existingDevice);
      await ebidding.LinkedDevice.create({
        data: {
          clientDeviceUuid: deviceUuid,
          userId: userId
        }
      });
      
      //triger agar session langsung berakhir => authMiddleware sending Email verifikasi ulang
      await ebidding.user.update({
        where : { userId : userId},
        data : {
          sessionExpireDate : new Date()
        }
      })

    }
  } catch (error) {
    throw new ResponseError(500,'Failed to verify device.'+ error);
  }

  const jwtPayload = { userId: user.userId };
  const token = jwt.sign(
    jwtPayload,
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  const expireDate = new Date();

  expireDate.setHours(expireDate.getHours() + 6);

  try {
    await ebidding.LogsLogin.create({
      data: {
        userId: userId,
        token: token,
        isActive: true,
        device: requestContext.userAgent || 'Unknown',
        ip: requestContext.ip || 'Unknown',
        expireDate: expireDate
      }
    });
  } catch (dbError) {
    throw new ResponseError(500,'Failed to create login session.');
  }

  const roleAccess = user.UserHasRoleAccess.reduce((accumulator, currentItem) => {
    const roleName = currentItem.role.roleName;
    const accessName = currentItem.access.accessName;

    accumulator.role.push(roleName);
    accumulator.access.push(accessName);
    
    return accumulator;
  }, { role: [], access: [] });

  const {role,access} = roleAccess
  
  return { token, role, access };
}

const otpSending = async (userId, email) => {
  try{
    await mailerTemplate.verifikasiLogin(userId,email);
    return true;
  }catch(e){
    throw new ResponseError(424,'Failed to send OTP verification code.')
  }
}

const otpVerification = async (userId,otp)=>{
  const verifikasi = await ebidding.otpVerifikasi.findFirst({
      where: {
          userId: userId,
          code : otp, 
      },
  });
  if(!verifikasi || verifikasi == null || verifikasi.expireDate <= new Date() ){
    throw new ResponseError(401, 'OTP verification failed. Please check the code.');
  }

  await ebidding.user.update({
    where: {
      userId : userId,
    },
    data : {
      sessionExpireDate : verifikasi.expireDate
    }
  })
  return true
}

const logout = async (token) => {
    await ebidding.LogsLogin.updateMany({
        where: {
            token: token,
            isActive: true,
        },
        data: {
            isActive: false,
        },
    });
};




export default {
  register,
  login,
  otpSending,
  otpVerification,
  logout
};