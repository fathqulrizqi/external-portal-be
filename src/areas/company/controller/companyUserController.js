// Controller for company user management (add user to company)
import { addUserToCompany } from '../service/companyService.js';

/**
 * POST /company/add-user
 * Body: { targetUserId }
 * Only Company Administrators can add users to their company.
 */
export async function addUserToCompanyController(req, res, next) {
  try {
    const adminUserId = req.user.userId;
    const { targetUserId } = req.body;
    if (!targetUserId) return res.status(400).json({ error: 'targetUserId is required' });
    await addUserToCompany(adminUserId, targetUserId);
    res.status(200).json({ status: 'Success', message: 'User added to company.' });
  } catch (err) {
    next(err);
  }
}
