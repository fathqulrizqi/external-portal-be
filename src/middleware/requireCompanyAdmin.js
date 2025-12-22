// Middleware to check if user is a Company Administrator
// Usage: app.use('/company', requireCompanyAdmin)
import { niterraappdb } from '../config/database.js';
import { ResponseError } from '../error/responseError.js';

export async function requireCompanyAdmin(req, res, next) {
  try {
    const userId = req.user.userId;
    const user = await niterraappdb.user.findUnique({
      where: { userId },
      include: { UserHasRoleAccess: true }
    });
    const isAdmin = user?.UserHasRoleAccess?.some(r => r.roleId === 2); // 2 = Company Admin roleId
    if (!isAdmin) throw new ResponseError(403, 'Only Company Administrators can perform this action.');
    next();
  } catch (err) {
    next(err);
  }
}
