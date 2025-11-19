import { ebidding } from '../../../config/database.js';
import {
    createCompanySegmentValidation,
    updateCompanySegmentValidation,
    getCompanySegmentValidation
} from '../validation/companySegmentValidation.js';

import { ResponseError } from '../../../error/responseError.js';

// Helper untuk penanganan error validasi
const handleValidationError = (error) => {
    throw new ResponseError(404,firstError);
}

const create = async (payload) => {
    try {
        await createCompanySegmentValidation.validateAsync(payload, { abortEarly: false });
    } catch (error) {
        handleValidationError(error);
    }
    
    const existingSegment = await ebidding.CompanySegment.findFirst({
        where: { segmentName: payload.segmentName }
    });

    if (existingSegment) {
        throw new ResponseError(409,'Company segment name already exists');
    }

    return ebidding.CompanySegment.create({
        data: payload
    });
};

const getAll = async () => {
    return ebidding.CompanySegment.findMany({
        orderBy: { segmentId: 'asc' }
    });
};

const getById = async (payload) => {
    try {
        await getCompanySegmentValidation.validateAsync(payload, { abortEarly: false });
    } catch (error) {
        handleValidationError(error);
    }

    const segment = await ebidding.CompanySegment.findUnique({
        where: { segmentId: payload.segmentId }
    });

    if (!segment) {
        throw new ResponseError(404,'Company segment not found');
    }

    return segment;
};

const update = async (payload) => {
    try {
        await updateCompanySegmentValidation.validateAsync(payload, { abortEarly: false });
    } catch (error) {
        handleValidationError(error);
    }

    const existingSegment = await ebidding.CompanySegment.findUnique({
        where: { segmentId: payload.segmentId }
    });

    if (!existingSegment) {
        throw new ResponseError(404,'Company segment not found');
    }

    return ebidding.CompanySegment.update({
        where: { segmentId: payload.segmentId },
        data: {
            segmentName: payload.segmentName,
            description: payload.description,
        }
    });
};

const remove = async (payload) => {
    try {
        await getCompanySegmentValidation.validateAsync(payload, { abortEarly: false });
    } catch (error) {
        handleValidationError(error);
    }

    const profiles = await ebidding.Profile.count({
        where: { segmentId: payload.segmentId }
    });

    if (profiles > 0) {
        throw new ResponseError(400,'Cannot delete segment: it is currently used by one or more profiles');
    }

    try {
        await ebidding.CompanySegment.delete({
            where: { segmentId: payload.segmentId }
        });
    } catch (error) {
        if (error.code === 'P2025') { 
            throw new ResponseError(404,'Company segment not found');
        }
        throw error;
    }
};


export default {
    create,
    getAll,
    getById,
    update,
    remove
};