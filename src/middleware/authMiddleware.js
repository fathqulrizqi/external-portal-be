import {ebidding} from "../config/database.js";
import mailerTemplate from "../utils/mailerTemplate.js";
import {UAParser} from 'ua-parser-js';

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
  const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress;
  const userAgentHeader = req.headers['user-agent'];
  const parser = new UAParser(userAgentHeader); 
  const result = parser.getResult();

  const osName = result.os.name || 'Unknown OS';
  const browserName = result.browser.name || 'Unknown Browser';
  const deviceModel = result.device.model ? ` - ${result.device.model}` : ''; 

  const deviceName = `${osName} - ${browserName}${deviceModel}`;

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
    console.log(log.user);
    if(log.user.sessionExpireDate <= new Date()){

      await mailerTemplate.verifikasiLogin(log.userId,log.user.email,deviceName,ipAddress);
      return res
        .status(401)
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