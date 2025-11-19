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
      user: {select: {
          userId: true,
          email: true,
          isActive: true,
        },
        include : {
          UserHasRoleAccess : {
            include : {
              role : true,
              access : true
            }
          }
        }
      },
    },
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
      await mailerTemplate.verifikasiLogin(log.userId,log.user.email);
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