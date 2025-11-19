import Joi from 'joi';

const createCompanySegmentValidation = Joi.object({
    segmentName: Joi.string().max(100).required().messages({
        'string.empty': 'Segment Name is required',
        'string.max': 'Segment Name must not exceed 100 characters',
        'any.required': 'Segment Name is required',
    }),
    description: Joi.string().max(255).optional().allow(null, '').messages({
        'string.max': 'Description must not exceed 255 characters',
    }),
});

const updateCompanySegmentValidation = Joi.object({
    segmentId: Joi.number().integer().min(1).required().messages({
        'number.base': 'Segment ID must be a number',
        'number.integer': 'Segment ID must be an integer',
        'number.min': 'Segment ID must be greater than or equal to 1',
        'any.required': 'Segment ID is required for update',
    }),
    segmentName: Joi.string().max(100).optional().messages({
        'string.max': 'Segment Name must not exceed 100 characters',
    }),
    description: Joi.string().max(255).optional().allow(null, '').messages({
        'string.max': 'Description must not exceed 255 characters',
    }),
}).or('segmentName', 'description'); // Memastikan setidaknya satu field selain ID diisi

const getCompanySegmentValidation = Joi.object({
    segmentId: Joi.number().integer().min(1).required().messages({
        'number.base': 'Segment ID must be a number',
        'number.integer': 'Segment ID must be an integer',
        'number.min': 'Segment ID must be greater than or equal to 1',
        'any.required': 'Segment ID is required',
    }),
});

export {
    createCompanySegmentValidation,
    updateCompanySegmentValidation,
    getCompanySegmentValidation
};