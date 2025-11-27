import {ebidding} from "../config/database.js";

export const verifikasiMiddleware = async (req, res, next) => {
  const token = req.get("Authorization");

  console.log(token);
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

  const data = {
    ...log.user,
  };

  req.user = data;
  next();
};