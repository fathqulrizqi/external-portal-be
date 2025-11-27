import {ebidding} from "../config/database.js";
import mailerTemplate from "../utils/mailerTemplate.js";

export const authMiddleware = async (req, res, next) => {
  const token = req.cookies.auth_token;
  if (!token) {
    return res
      .status(401)
      .json({
        errors: "Unauthorized",
      })
      .end();
  }
  
  const log = await ebidding.logsLogin.findUnique({
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
        if (log) {
    //   await ebidding.logsLogin.delete({ where: { token: token } });
        }
    res.clearCookie("auth_token");

    return res
            .status(401)
            .json({
                errors: "Unauthorized",
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

    const deviceUuid = req.headers['Client-Device-Uuid'];
    const existingDevice = await ebidding.linkedDevice.findFirst({
      where: { userId: log.user.userId }
    });
  
      
    if (existingDevice == null || deviceUuid != existingDevice.clientDeviceUuid) {
      await ebidding.linkedDevice.create({
        data: {
          clientDeviceUuid: deviceUuid,
          userId: log.user.userId
        }
      });
      
      await ebidding.user.update({
        where : { userId : log.user.userId},
        data : {
          sessionExpireDate : new Date()
        }
      })
      await mailerTemplate.verifikasiLogin(log.user.userId,log.user.email,req.headers['user-agent'],req.ip);
      return res
        .status(403)
        .json({
          errors: "New Device Detected/Session Device Expired. Please verify login via email.",
        })
        .end();
    }

  const data = {
    ...log.user,
  };

  req.user = data;
  next();
};