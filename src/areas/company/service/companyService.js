import { niterraappdb } from '../../../config/database.js';
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
    
    const existing = await niterraappdb.Company.findFirst({
        where: { companyName: payload.companyName }
    });

    if (existing) {
        throw new ResponseError(409,'Company name already exists');
    }

    const company = await niterraappdb.Company.create({
        data: payload
    });

    await niterraappdb.profile.update({
        where: {userId : userId},
        data :{
            companyId: company.companyId
        }
    })
    return true;
};

const getAll = async () => {
    return niterraappdb.Company.findMany({
        orderBy: { segmentId: 'asc' }
    });
};

const getById = async (payload) => {

    const company = await niterraappdb.Company.findUnique({
        where: { companyId: payload.companyId }
    });

    if (!company) {
        throw new ResponseError(404,'Company not found');
    }

    return company;
};

const getByUserId = async (userId) => {

    const user = await niterraappdb.profile.findUnique({
        where : {userId : userId},
        select : {
            companyId : true
        }
    })
    const company = await niterraappdb.Company.findUnique({
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

    const profile = await niterraappdb.profile.findUnique({
        where :{userId : userId}
    })
    
    if(!profile.companyId){
        throw new ResponseError(404, 'You do not have company, Please Input Company Form First!')
    }

    return niterraappdb.Company.update({
        where: { companyId: profile.companyId },
        data: {
            companyCode        : payload.companyCode,
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

    const profiles = await niterraappdb.Profile.count({
        where: { companyId: payload.companyId }
    });

    if (profiles > 0) {
        throw new ResponseError(400,'Cannot delete company: it is currently used by one or more profiles');
    }

    try {
        await niterraappdb.Company.delete({
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