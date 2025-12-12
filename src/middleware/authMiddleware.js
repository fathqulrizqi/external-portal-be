import {niterraappdb} from "../config/database.js";
import { logger } from "../config/logging.js";
import mailerTemplate from "../utils/mailerTemplate.js";

export const authMiddleware = async (req, res, next) => {
  let token = req.get("Authorization");
  if (!token) {
    return res
      .status(401)
      .json({
        errors: "Unauthorized",
      })
      .end();
  }
  
  const log = await niterraappdb.logsLogin.findUnique({
    where: {
      token: token,
    },
    include: {
    user: {
      select: {
        userId: true,
        email: true,
        isActive: true,
        sessionExpireDate: true,
        UserHasRoleAccess: {
          include: {
            role: true,
            access: true
          }
        }
      }
    }
  }
  });
  console.log('masuk sini',token);

  if (!log || new Date() > log.expireDate) {
    //     if (log) {
    // //   await niterraappdb.logsLogin.delete({ where: { token: token } });
    //     }

    return res
      .status(401)
      .json({
          errors: "Unauthorized",
      })
      .end();

  }
    
    if(log.user.isActive == false){
        await mailerTemplate.verifikasiRegistrasi(log.user.userId, log.user.email);
        return res
        .status(402)
        .json({
          errors: "Account is not active",
        })
        .end();
    }

    const deviceUuid = req.get("Client-Device-Uuid");
    if(!deviceUuid){
        return res
      .status(405)
      .json({
        errors: "Device Not Allowed.",
      })
      .end();
    }

    const existingDevice = await niterraappdb.linkedDevice.findFirst({
      where: { userId: log.user.userId }
    });

    if (existingDevice === null || deviceUuid !== existingDevice.clientDeviceUuid) {
      
      await niterraappdb.linkedDevice.deleteMany({
        where: {
          userId: log.user.userId,
        },
      });
      
      await niterraappdb.linkedDevice.create({
        data: {
          clientDeviceUuid: deviceUuid,
          userId: log.user.userId
        }
      });
      
      await niterraappdb.user.update({
        where : { userId : log.user.userId},
        data : {
          sessionExpireDate : new Date()
        }
      });
      
      await mailerTemplate.verifikasiLogin(log.user.userId,log.user.email,req.get('user-agent'),req.get('ip'));
      
      return res
        .status(403)
        .json({
          errors: "New Device Detected/Session Device Expired. Please verify login via email.",
        })
        .end();
    }

    if(log.user.sessionExpireDate <= new Date()){
      if(log.user.isActive == false){
          return res
          .status(402)
          .json({
            errors: "Account is not active",
          })
          .end();
      }
      
      await mailerTemplate.verifikasiLogin(log.user.userId,log.user.email,req.get('user-agent'),req.get('ip'));
      return res
        .status(403)
        .json({
          errors: "Session Expired!!",
        })
        .end();
    }

    if(log.user.blockedUntil != null && log.user.blockedUntil > new Date()){
      return res
        .status(406)
        .json({
          errors: `Account Blocked Until ${log.user.blockedUntil}`,
        })
        .end();
    }
    

  const data = {
    ...log.user,
  };

  req.user = data;
  next();
};