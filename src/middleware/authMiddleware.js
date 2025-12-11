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
  // Accept 'Bearer <token>' format
  if (token.startsWith('Bearer ')) {
    token = token.slice(7);
  }
  
  const log = await niterraappdb.logsLogin.findUnique({
    where: {
      token: token,
      isActive : true
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
      
      await mailerTemplate.verifikasiLogin(log.user.userId,log.user.email,req.headers['user-agent'],req.ip);
      
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
      
      await mailerTemplate.verifikasiLogin(log.user.userId,log.user.email,req.headers['user-agent'],req.ip);
      return res
        .status(403)
        .json({
          errors: "Session Expired!!",
        })
        .end();
    }

  const data = {
    ...log.user,
  };

  req.user = data;
  next();
};