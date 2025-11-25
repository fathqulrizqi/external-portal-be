import Joi from "joi";

const createMenuValidation = Joi.object({
    menuName: Joi.string().min(3).max(100).required().messages({
        'string.base': 'Menu Name must be a string',
        'string.empty': 'Menu Name cannot be empty',
        'string.min': 'Menu Name must have at least 3 characters',
        'string.max': 'Menu Name cannot exceed 100 characters',
        'any.required': 'Menu Name is required'
    }),
    sequence: Joi.number().integer().min(1).required().messages({
        'number.base': 'Sequence must be a number',
        'number.min': 'Sequence must be at least 1',
        'any.required': 'Sequence is required'
    }),
    parentId: Joi.number().integer().allow(null).optional().messages({
        'number.base': 'Parent ID must be a number'
    }),
    icon: Joi.string().allow("", null).optional().messages({
        'string.base': 'Icon must be a string'
    }),
    redirect: Joi.string().allow("", null).optional().messages({
        'string.base': 'Redirect URL must be a string'
    }),
    isGlobal: Joi.boolean().required().messages({
        'boolean.base': 'Is Global must be a boolean',
        'any.required': 'Is Global field is required'
    }),
    isShow: Joi.boolean().required().messages({
        'boolean.base': 'Is Show must be a boolean',
        'any.required': 'Is Show field is required'
    }),
    isActive: Joi.boolean().required().messages({
        'boolean.base': 'Is Active must be a boolean',
        'any.required': 'Is Active field is required'
    })
});

const updateMenuValidation = Joi.object({
    menuName: Joi.string().min(3).max(100).optional().messages({
        'string.base': 'Menu Name must be a string',
        'string.min': 'Menu Name must have at least 3 characters',
        'string.max': 'Menu Name cannot exceed 100 characters'
    }),
    sequence: Joi.number().integer().min(1).optional().messages({
        'number.base': 'Sequence must be a number',
        'number.min': 'Sequence must be at least 1'
    }),
    parentId: Joi.number().integer().allow(null).optional().messages({
        'number.base': 'Parent ID must be a number'
    }),
    icon: Joi.string().allow("", null).optional().messages({
        'string.base': 'Icon must be a string'
    }),
    redirect: Joi.string().allow("", null).optional().messages({
        'string.base': 'Redirect URL must be a string'
    }),
    isGlobal: Joi.boolean().optional().messages({
        'boolean.base': 'Is Global must be a boolean'
    }),
    isShow: Joi.boolean().optional().messages({
        'boolean.base': 'Is Show must be a boolean'
    }),
    isActive: Joi.boolean().optional().messages({
        'boolean.base': 'Is Active must be a boolean'
    })
});

export {
    createMenuValidation,
    updateMenuValidation
}