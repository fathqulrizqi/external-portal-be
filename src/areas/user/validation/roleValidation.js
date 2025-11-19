import Joi from 'joi';

const createRoleValidation = Joi.object({
    roleName: Joi.string().max(50).required().messages({
        'string.empty': 'Role Name is required',
        'string.max': 'Role Name must not exceed 50 characters',
        'any.required': 'Role Name is required',
    }),
});

const updateRoleValidation = Joi.object({
    roleId: Joi.number().integer().min(1).required().messages({
        'number.base': 'Role ID must be a number',
        'number.integer': 'Role ID must be an integer',
        'number.min': 'Role ID must be greater than or equal to 1',
        'any.required': 'Role ID is required for update',
    }),
    roleName: Joi.string().max(50).optional().messages({
        'string.max': 'Role Name must not exceed 50 characters',
    }),
}).or('roleName'); // Memastikan setidaknya satu field yang bisa di-update diisi

const getRoleValidation = Joi.object({
    roleId: Joi.number().integer().min(1).required().messages({
        'number.base': 'Role ID must be a number',
        'number.integer': 'Role ID must be an integer',
        'number.min': 'Role ID must be greater than or equal to 1',
        'any.required': 'Role ID is required',
    }),
});

export {
    createRoleValidation,
    updateRoleValidation,
    getRoleValidation
};