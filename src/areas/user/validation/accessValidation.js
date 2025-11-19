import Joi from 'joi';

const createAccessValidation = Joi.object({
    accessName: Joi.string().max(50).required().messages({
        'string.empty': 'Access Name is required',
        'string.max': 'Access Name must not exceed 50 characters',
        'any.required': 'Access Name is required',
    }),
});

const updateAccessValidation = Joi.object({
    accessId: Joi.number().integer().min(1).required().messages({
        'number.base': 'Access ID must be a number',
        'number.integer': 'Access ID must be an integer',
        'number.min': 'Access ID must be greater than or equal to 1',
        'any.required': 'Access ID is required for update',
    }),
    accessName: Joi.string().max(50).optional().messages({
        'string.max': 'Access Name must not exceed 50 characters',
    }),
}).or('accessName'); // Memastikan setidaknya satu field yang bisa di-update diisi

const getAccessValidation = Joi.object({
    accessId: Joi.number().integer().min(1).required().messages({
        'number.base': 'Access ID must be a number',
        'number.integer': 'Access ID must be an integer',
        'number.min': 'Access ID must be greater than or equal to 1',
        'any.required': 'Access ID is required',
    }),
});

export {
    createAccessValidation,
    updateAccessValidation,
    getAccessValidation
};