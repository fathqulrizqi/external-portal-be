import { niterraappdb } from '../../../config/database.js';
import {
    createRoleValidation,
    updateRoleValidation,
    getRoleValidation
} from '../validation/roleValidation.js';
import { ResponseError } from '../../../error/responseError.js';


const handleValidationError = (error) => {
    const firstError = error.details[0].message;
    throw new ResponseError(400,firstError);
}

const create = async (payload) => {
    
    try {
        await createRoleValidation.validateAsync(payload, { abortEarly: false });
    } catch (error) {
        handleValidationError(error);
    }
    
    // Cek duplikasi roleName
    const existingRole = await niterraappdb.Role.findFirst({
        where: { roleName: payload.roleName }
    });

    if (existingRole) {
        throw new ResponseError(409,`Role name '${payload.roleName}' already exists`);
    }

    return niterraappdb.Role.create({
        data: payload
    });
};

const getAll = async () => {
    return niterraappdb.Role.findMany({
        orderBy: { roleId: 'asc' }
    });
};

const getById = async (payload) => {
    try {
        await getRoleValidation.validateAsync(payload, { abortEarly: false });
    } catch (error) {
        handleValidationError(error);
    }

    const role = await niterraappdb.Role.findUnique({
        where: { roleId: payload.roleId }
    });

    if (!role) {
        throw new ResponseError(404,'Role not found');
    }

    return role;
};

const update = async (payload) => {
    try {
        await updateRoleValidation.validateAsync(payload, { abortEarly: false });
    } catch (error) {
        handleValidationError(error);
    }

    // Cek keberadaan role
    const existingRole = await niterraappdb.Role.findUnique({
        where: { roleId: payload.roleId }
    });

    if (!existingRole) {
       throw new ResponseError(404,'Role not found');
    }
    
    // Cek duplikasi roleName baru (jika diubah)
    if (payload.roleName) {
        const duplicateRole = await niterraappdb.Role.findFirst({
            where: {
                roleName: payload.roleName,
                roleId: { not: payload.roleId } // Kecualikan ID yang sedang diupdate
            }
        });
        if (duplicateRole) {
            throw new ResponseError(409,`Role name '${payload.roleName}' already exists`);
        }
    }

    return niterraappdb.Role.update({
        where: { roleId: payload.roleId },
        data: {
            roleName: payload.roleName,
        }
    });
};

const remove = async (payload) => {
    try {
        await getRoleValidation.validateAsync(payload, { abortEarly: false });
    } catch (error) {
        handleValidationError(error);
    }

    const relations = await niterraappdb.UserHasRoleAccess.count({
        where: { roleId: payload.roleId }
    });

    if (relations > 0) {
        throw new ResponseError(400,'Cannot delete role: it is currently linked to one or more user access definitions.');
        
    }

    try {
        await niterraappdb.Role.delete({
            where: { roleId: payload.roleId }
        });
    } catch (error) {
        if (error.code === 'P2025') { 
            throw new ResponseError(404,'Role not found');
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