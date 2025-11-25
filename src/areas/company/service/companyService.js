import { ebidding } from '../../../config/database.js';
import {
    createCompanyValidation,
    updateCompanyValidation,
} from '../validation/companyValidation.js';

import { ResponseError } from '../../../error/responseError.js';

const handleValidationError = (error) => {
    const firstError = error.details[0].message;
    throw new ResponseError(404,firstError);
}

const create = async (userId,payload) => {
    try {
        await createCompanyValidation.validateAsync(payload, { abortEarly: false });
    } catch (error) {
        handleValidationError(error);
    }
    
    const existing = await ebidding.Company.findFirst({
        where: { companyName: payload.companyName }
    });

    if (existing) {
        throw new ResponseError(409,'Company name already exists');
    }

    const company = await ebidding.Company.create({
        data: payload
    });

    await ebidding.profile.update({
        where: {userId : userId},
        data :{
            companyId: company.companyId
        }
    })
    return true;
};

const getAll = async () => {
    return ebidding.Company.findMany({
        orderBy: { segmentId: 'asc' }
    });
};

const getById = async (payload) => {

    const company = await ebidding.Company.findUnique({
        where: { companyId: payload.companyId }
    });

    if (!company) {
        throw new ResponseError(404,'Company not found');
    }

    return company;
};

const getByUserId = async (userId) => {

    const user = await ebidding.profile.findUnique({
        where : {userId : userId},
        select : {
            companyId : true
        }
    })
    const company = await ebidding.Company.findUnique({
        where: { companyId: user.companyId }
    });

    if (!company) {
        throw new ResponseError(404,'Company not found');
    }

    return company;
};

const update = async (userId,payload) => {
    try {
        await updateCompanyValidation.validateAsync(payload, { abortEarly: false });
    } catch (error) {
        handleValidationError(error);
    }

    const existing = await ebidding.Company.findUnique({
        where: { companyId: payload.companyId }
    });

    if (!existing) {
        throw new ResponseError(404,'Company not found');
    }

    const isAuthorized = await ebidding.profile.findFirst({
        where: {
            companyId: existingCompany.companyId,
            userId: userId
        }
    });

    if (!isAuthorized) {
        throw new ResponseError(403, 'Forbidden: You do not have access to update this company');
    }


    return ebidding.Company.update({
        where: { companyId: payload.companyId },
        data: {
            companyName         : payload.companyName,
            companyFoundingDate : payload.companyFoundingDate,
            companyStatus       : payload.companyStatus,
            companyTelpFax      : payload.companyTelpFax,
            companyAddress      : payload.companyAddress,
            companyEmail        : payload.companyEmail,
            npwp                : payload.npwp,
            website             : payload.website,
            segmentId           : payload.segmentId,
            urlImage            : payload.urlImage
        }
    });
};

const remove = async (payload) => {

    const profiles = await ebidding.Profile.count({
        where: { companyId: payload.companyId }
    });

    if (profiles > 0) {
        throw new ResponseError(400,'Cannot delete company: it is currently used by one or more profiles');
    }

    try {
        await ebidding.Company.delete({
            where: { companyId: payload.companyId }
        });
    } catch (error) {
        if (error.code === 'P2025') { 
            throw new ResponseError(404,'Company not found');
        }
        throw error;
    }
};


export default {
    create,
    getAll,
    getById,
    getByUserId,
    update,
    remove
};