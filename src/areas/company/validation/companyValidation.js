import Joi from 'joi';

const createCompanyValidation = Joi.object({
    companyName: Joi.string().max(100).required().messages({
        'string.empty': 'Company Name is required',
        'string.max': 'Company Name must not exceed 100 characters',
        'any.required': 'Company Name is required',
    }),
    
    companyStatus: Joi.string().max(50).required().messages({
        'string.empty': 'Company Status is required',
        'string.max': 'Company Status must not exceed 50 characters',
        'any.required': 'Company Status is required',
    }),
    companyTelpFax: Joi.string().pattern(/^[0-9\-\+\s]+$/).max(20).required().messages({
        'string.pattern.base': 'Phone/Fax contains invalid characters',
        'string.empty': 'Phone/Fax is required',
        'string.max': 'Phone/Fax must not exceed 20 characters',
        'any.required': 'Phone/Fax is required',
    }),
    companyAddress: Joi.string().max(500).required().messages({
        'string.empty': 'Address is required',
        'string.max': 'Address must not exceed 500 characters',
        'any.required': 'Address is required',
    }),
    companyEmail: Joi.string().email({ tlds: { allow: false } }).max(100).required().messages({
        'string.email': 'Email must be a valid email address',
        'string.empty': 'Email is required',
        'string.max': 'Email must not exceed 100 characters',
        'any.required': 'Email is required',
    }),
    npwp: Joi.string().max(30).required().messages({
        'string.empty': 'NPWP is required',
        'string.max': 'NPWP must not exceed 30 characters',
        'any.required': 'NPWP is required',
    }),
   
    segments: Joi.min(1).required().messages({
        'number.base': 'Segment ID must be a number',
        'number.integer': 'Segment ID must be an integer',
        'number.min': 'Segment ID must be greater than or equal to 1',
        'any.required': 'Segment ID is required',
    }),
    
    companyCode: Joi.string().max(100).required().messages({
        'string.empty': 'Company Code is required',
        'string.max': 'Company Code must not exceed 100 characters',
        'any.required': 'Company Code is required',
    }),
    companyType: Joi.string().max(100).required().messages({
        'string.empty': 'Company Type is required',
        'string.max': 'Company Type must not exceed 100 characters',
        'any.required': 'Company Type is required',
    }),
    companyCity: Joi.string().max(100).required().messages({
        'string.empty': 'Company City is required',
        'string.max': 'Company City must not exceed 100 characters',
        'any.required': 'Company City is required',
    }),
    // urlImage: Joi.string().optional().allow(null, '').messages({
    //     'string.base': 'Image URL must be a string',
    // }),
    application : Joi.string().required().messages({
        'string.empty': 'Invalid application Register',
        'any.required': 'Invalid application Register',
      })
});

const updateCompanyValidation = Joi.object({
    companyCode: Joi.string().max(100).required().messages({
        'string.empty': 'Company Code is required',
        'string.max': 'Company Code must not exceed 100 characters',
        'any.required': 'Company Code is required',
    }),
    companyName: Joi.string().max(100).optional().messages({
        'string.max': 'Company Name must not exceed 100 characters',
    }),
    companyFoundingDate: Joi.date().iso().optional().messages({
        'date.base': 'Founding Date must be a valid date',
        'date.format': 'Founding Date must be in ISO format (YYYY-MM-DD)',
    }),
    companyStatus: Joi.string().max(50).optional().messages({
        'string.max': 'Company Status must not exceed 50 characters',
    }),
    companyTelpFax: Joi.string().pattern(/^[0-9\-\+\s]+$/).max(20).optional().messages({
        'string.pattern.base': 'Phone/Fax contains invalid characters',
        'string.max': 'Phone/Fax must not exceed 20 characters',
    }),
    companyAddress: Joi.string().max(500).optional().messages({
        'string.max': 'Address must not exceed 500 characters',
    }),
    companyEmail: Joi.string().email({ tlds: { allow: false } }).max(100).optional().messages({
        'string.email': 'Email must be a valid email address',
        'string.max': 'Email must not exceed 100 characters',
    }),
    npwp: Joi.string().max(30).optional().messages({
        'string.max': 'NPWP must not exceed 30 characters',
    }),
    website: Joi.string().uri().max(255).optional().allow(null, '').messages({
        'string.uri': 'Website must be a valid URL',
        'string.max': 'Website URL must not exceed 255 characters',
    }),
    segmentId: Joi.number().integer().min(1).optional().messages({
        'number.base': 'Segment ID must be a number',
        'number.integer': 'Segment ID must be an integer',
        'number.min': 'Segment ID must be greater than or equal to 1',
    }),
    urlImage: Joi.string().optional().allow(null, '').messages({
        'string.base': 'Image URL must be a string',
    }),
}).min(1);

export {
    createCompanyValidation,
    updateCompanyValidation
};