import { ebidding } from '../../../config/database.js';
import {
    createAccessValidation,
    updateAccessValidation,
    getAccessValidation
} from '../validation/accessValidation.js';
import { ResponseError } from '../../../error/responseError.js';


const handleValidationError = (error) => {
    const firstError = error.details[0].message;
    throw new ResponseError(400,firstError);
}

const create = async (payload) => {
    try {
        await createAccessValidation.validateAsync(payload, { abortEarly: false });
    } catch (error) {
        handleValidationError(error);
    }
    
    const existingAccess = await ebidding.Access.findFirst({
        where: { accessName: payload.accessName }
    });

    if (existingAccess) {
        throw new ResponseError(409,`Access name '${payload.accessName}' already exists`);
    }

    return ebidding.Access.create({
        data: payload
    });
};

const getAll = async () => {
    return ebidding.Access.findMany({
        orderBy: { accessId: 'asc' }
    });
};

const getById = async (payload) => {
    try {
        await getAccessValidation.validateAsync(payload, { abortEarly: false });
    } catch (error) {
        handleValidationError(error);
    }

    const access = await ebidding.Access.findUnique({
        where: { accessId: payload.accessId }
    });

    if (!access) {
        throw new ResponseError(404,'Access not found');
    }

    return access;
};

const update = async (payload) => {
    try {
        await updateAccessValidation.validateAsync(payload, { abortEarly: false });
    } catch (error) {
        handleValidationError(error);
    }

    // Cek keberadaan access
    const existingAccess = await ebidding.Access.findUnique({
        where: { accessId: payload.accessId }
    });

    if (!existingAccess) {
        throw new ResponseError(404,'Access not found');
    }
    
    
    // Cek duplikasi accessName baru (jika diubah)
    if (payload.accessName) {
        const duplicateAccess = await ebidding.Access.findFirst({
            where: {
                accessName: payload.accessName,
                accessId: { not: payload.accessId } // Kecualikan ID yang sedang diupdate
            }
        });
        if (duplicateAccess) {
            throw new ResponseError(409,`Access name '${payload.accessName}' already exists`);
        }
    }

    return ebidding.Access.update({
        where: { accessId: payload.accessId },
        data: {
            accessName: payload.accessName,
        }
    });
};

const remove = async (payload) => {
    try {
        await getAccessValidation.validateAsync(payload, { abortEarly: false });
    } catch (error) {
        handleValidationError(error);
    }

    // Cek apakah hak akses ini digunakan oleh Role manapun (relasi UserHasRoleAccess)
    const relations = await ebidding.UserHasRoleAccess.count({
        where: { accessId: payload.accessId }
    });

    if (relations > 0) {
        throw new ResponseError(400,'Cannot delete access: it is currently linked to one or more role definitions.');
    }

    try {
        await ebidding.Access.delete({
            where: { accessId: payload.accessId }
        });
    } catch (error) {
        if (error.code === 'P2025') { 
            throw new ResponseError(404,'Access not found');
    }
        throw new ResponseError(404,error);
    }
};


export default {
    create,
    getAll,
    getById,
    update,
    remove
};