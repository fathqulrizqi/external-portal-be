import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { registerValidation, loginValidation } from '../validation/authValidation.js'; 
import { niterraappdb } from '../../config/database.js';
import mailerTemplate from '../../utils/mailerTemplate.js';
import { ResponseError } from '../../error/responseError.js';
import { application } from 'express';


const register = async (payload) => {
  
  try {
  await registerValidation.validateAsync(payload, {
    abortEarly: false,
  });
  } catch (error) {
    const firstError = error.details[0].message;
    throw new ResponseError(401,firstError);
  }


  const existingUser = await niterraappdb.User.findFirst({
    where: { email: payload.email, application : payload.application }
  });

  if (existingUser) {
    throw new Error('Email already registered'); 
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(payload.password, salt);

  const result = await niterraappdb.$transaction(async (tx) => {
    const newUser = await tx.User.create({
      data: {
        email: payload.email,
        password: hashedPassword,
        sessionExpireDate: new Date(),
        application : payload.application 
      },
    });
    await tx.Profile.create({
      data: {
        userId: newUser.userId,
        urlImage: payload.urlImage,
        fullName: payload.fullName,
        phone: payload.phone,
      },
    });

    const DEFAULT_ROLE_ID = 1; 
    const DEFAULT_ACCESS_ID = 1;

    await tx.userHasRoleAccess.create({
      data: {
        userId: newUser.userId,
        roleId: DEFAULT_ROLE_ID,
        accessId: DEFAULT_ACCESS_ID,
      },
    });

    return newUser;
  });
  
  try {
    await mailerTemplate.verifikasiRegistrasi(result.userId, payload.email);
  } catch (error) {
    console.error("Gagal mengirim email verifikasi:", error);
  }
  const { password, ...userWithoutPassword } = result;

  return userWithoutPassword;
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

  const user = await niterraappdb.User.findFirst({
    where: { email: payload.email , application: payload.application},
    include : { 
      UserHasRoleAccess : {
        include :{
          role : true,
          access : true,
        }
      }
    }
  });
  if (!user) {
     throw new ResponseError(404,"You don't have an account,please register!!");
  }


  const isMatch = await bcrypt.compare(payload.password, user.password);
  
  if (!isMatch) {
    throw new ResponseError(401,'Invalid email or password');
  }

  const userId = user.userId;

  const jwtPayload = { userId: user.userId };
  const token = jwt.sign(
    jwtPayload,
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES_IN }
  );

  const expireDate = new Date();

  expireDate.setHours(expireDate.getHours() + 6);

  try {
    await niterraappdb.LogsLogin.create({
      data: {
        userId: userId,
        token: 'Bearer ' + token,
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

  const {role,access} = roleAccess;
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

const otpRegistrationVerification = async (userId,otp) => {

  const verifikasi = await niterraappdb.otpVerifikasi.findFirst({
      where: {
          userId: userId,
          code : otp, 
      },
  });
  if(!verifikasi || verifikasi == null || verifikasi.expireDate <= new Date() ){
    throw new ResponseError(401, 'OTP verification failed. Please check the code.');
  }

  await niterraappdb.user.update({
    where: {
      userId : userId,
    },
    data : {
      isActive : true, 
      sessionExpireDate : verifikasi.expireDate
    }
  })
  return true;
}

const otpVerification = async (userId,otp)=>{
  const verifikasi = await niterraappdb.otpVerifikasi.findFirst({
      where: {
          userId: userId,
          code : otp, 
      },
  });
  if(!verifikasi || verifikasi == null || verifikasi.expireDate <= new Date() ){
    throw new ResponseError(401, 'OTP verification failed. Please check the code.');
  }

  await niterraappdb.user.update({
    where: {
      userId : userId,
    },
    data : {
      sessionExpireDate : new Date(Date.now() + 6 * 60 * 60 * 1000)
    }
  })
  return true;
}

const logout = async (token) => {
    await niterraappdb.LogsLogin.updateMany({
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
  otpRegistrationVerification,
  logout
};