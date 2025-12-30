/**
 * Get all companies (for dropdowns, admin, etc.)
 */
export async function getAllCompanies(filter = {}) {
  const where = {};
  if (filter.application) where.application = filter.application;
  if (filter.companyStatus) where.companyStatus = filter.companyStatus;
  return niterraappdb.Company.findMany({ where });
}
import { application } from 'express';
import { niterraappdb } from '../../../config/database.js';
import { ResponseError } from '../../../error/responseError.js';
import { createCompanyValidation, updateCompanyValidation } from '../validation/companyValidation.js';

/**
 * Helper: Throws if user is not a company admin.
 */
async function assertCompanyAdmin(userId) {
  const user = await niterraappdb.user.findUnique({
    where: { userId },
    include: { UserHasRoleAccess: true }
  });
  const isAdmin = user?.UserHasRoleAccess?.some(r => r.roleId === /* your admin role id, e.g. */ 2);
  if (!isAdmin) throw new ResponseError(403, 'Only Company Administrators can perform this action.');
}

/**
 * Create a company and associate with user (if not already associated).
 */
export async function createCompany(userId, payload) {
  await createCompanyValidation.validateAsync(payload, { abortEarly: false });

  // Check if user already has a company
  const profile = await niterraappdb.profile.findUnique({ where: { userId } });
  if (profile?.companyId) throw new ResponseError(400, 'User already associated with a company.');

  // Check for duplicate company name
  const existing = await niterraappdb.Company.findFirst({ where: { companyName: payload.companyName } });
  if (existing) throw new ResponseError(409, 'Company name already exists.');

  // Create company and associate
  const company = await niterraappdb.Company.create({ data: {
    urlImage : payload.urlImage,
    companyName : payload.companyName,
    companyStatus : payload.companyStatus,
    companyTelpFax : payload.companyTelpFax,
    companyCity : payload.companyCity,
    companyAddress : payload.companyAddress,
    companyEmail : payload.companyEmail,
    npwp : payload.npwp,
    companyCode : payload.companyCode,
    companyType : payload.companyType,
    application : payload.application
  } });

  const promiseList = payload.segments.map(item => {
      return niterraappdb.companySegmentLink.create({
          data: {
              companyId: company.companyId,
              segmentId: item
          }
      });
  });

  await Promise.all(promiseList);
  
  await niterraappdb.profile.update({ where: { userId }, data: { companyId: company.companyId } });
  return company;
}

/**
 * Get company by user (each user can only have one).
 */
export async function getCompanyByUser(userId) {
  const profile = await niterraappdb.profile.findUnique({ where: { userId } });
  if (!profile?.companyId) throw new ResponseError(404, 'User not associated with a company.');
  const company = await niterraappdb.Company.findUnique({ where: { companyId: profile.companyId } });
  if (!company) throw new ResponseError(404, 'Company not found.');
  return company;
}

/**
 * Update company (only by associated user).
 */
export async function updateCompany(userId, payload) {
  // 1. Validasi input
  await updateCompanyValidation.validateAsync(payload, { abortEarly: false });

  // 2. Cek apakah user punya company
  const profile = await niterraappdb.profile.findUnique({ where: { userId } });
  if (!profile?.companyId) throw new ResponseError(404, 'User not associated with a company.');

  const { segments, ...companyData } = payload;

  if (companyData.companyName) {
    const existing = await niterraappdb.Company.findFirst({
      where: {
        companyName: companyData.companyName,
        NOT: {
          companyId: profile.companyId 
        }
      }
    });
    if (existing) throw new ResponseError(409, 'Company name already exists.');
  }
  console.log(companyData);
  const company = await niterraappdb.Company.update({
    where: { companyId: profile.companyId },
    data: {
        urlImage : companyData.urlImage,
        companyName : companyData.companyName,
        companyStatus : companyData.companyStatus,
        companyTelpFax : companyData.companyTelpFax,
        companyCity : companyData.companyCity,
        companyAddress : companyData.companyAddress,
        companyEmail : companyData.companyEmail,
        npwp : companyData.npwp,
        companyCode : companyData.companyCode,
        companyType : companyData.companyType
    }
  });

  if (segments && Array.isArray(segments)) {
    await niterraappdb.companySegmentLink.deleteMany({
      where: { companyId: profile.companyId }
    });

    const promiseList = segments.map(item => {
      return niterraappdb.companySegmentLink.create({
        data: {
          companyId: profile.companyId,
          segmentId: item
        }
      });
    });

    await Promise.all(promiseList);
  }

  return company;
}

/**
 * Delete company (only by associated user, and if no other users are associated).
 */
export async function deleteCompany(userId) {
  const profile = await niterraappdb.profile.findUnique({ where: { userId } });
  if (!profile?.companyId) throw new ResponseError(404, 'User not associated with a company.');
  const userCount = await niterraappdb.profile.count({ where: { companyId: profile.companyId } });
  if (userCount > 1) throw new ResponseError(400, 'Cannot delete company: other users are still associated.');
  await niterraappdb.Company.delete({ where: { companyId: profile.companyId } });
}

/**
 * Add a user to the company (only by company admin).
 */
export async function addUserToCompany(adminUserId, targetUserId) {
  await assertCompanyAdmin(adminUserId);
  const adminProfile = await niterraappdb.profile.findUnique({ where: { userId: adminUserId } });
  if (!adminProfile?.companyId) throw new ResponseError(404, 'Admin not associated with a company.');
  await niterraappdb.profile.update({ where: { userId: targetUserId }, data: { companyId: adminProfile.companyId } });
}