import Joi from 'joi';
import { ebidding } from '../../config/database.js';

const registerValidation = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': 'Email is required',
    'string.email': 'Must be a valid email',
    'any.required': 'Email is required',
  }).custom(async (value, helpers) => {
     try {
        const existingUser = await ebidding.user.findUnique({ where: { email: value } });
    
        if (existingUser) {
          return helpers.error('any.custom', { message: 'Email already exists' });
        }
        return value;
     } catch (dbError) {
        return helpers.error('any.invalid', { message: 'Error checking email validity' });
     }
   }, 'Email Database Check'),
  
  password: Joi.string()
  .min(8) 
  .pattern(new RegExp('[A-Z]'), { name: 'uppercase' }) 
  .pattern(new RegExp('[a-z]'), { name: 'lowercase' }) 
  .pattern(new RegExp('[0-9]'), { name: 'number' })
  .required()
  .messages({ 
    'string.empty': 'Password is required',
    'any.required': 'Password is required',
    'string.min': 'Password must be at least 8 characters long',
    'string.pattern.base': 'Password must contain at least one uppercase letter, one lowercase letter, and one number'
  }),

  passwordConfirm: Joi.string().valid(Joi.ref('password')).required().messages({
    'string.empty': 'Password confirmation is required',
    'any.only': 'Passwords do not match',
    'any.required': 'Password confirmation is required',
  }),

  urlImage: Joi.string().required(),
  
  fullName: Joi.string().required().messages({
    'string.empty': 'Full name is required',
    'any.required': 'Full name is required',
  }),
  
  companyName: Joi.string().required().messages({
    'string.empty': 'Company name is required',
    'any.required': 'Company name is required',
  }),
  
  description: Joi.string().required().messages({
    'string.empty': 'Description is required',
    'any.required': 'Description is required',
  }),
  
  npwp: Joi.string().required().messages({
    'string.empty': 'NPWP is required',
    'any.required': 'NPWP is required',
  }),
  
  deedNumber: Joi.string().required().messages({
    'string.empty': 'Deed number is required',
    'any.required': 'Deed number is required',
  }),
  
  establishedDate: Joi.any().required().messages({
    'any.required': 'Established date is required',
  }),
  
  npwpUrl: Joi.string().required().messages({
    'string.empty': 'NPWP file is required',
    'any.required': 'NPWP file is required',
  }),
  
  deedUrl: Joi.string().required().messages({
    'string.empty': 'Deed file is required',
    'any.required': 'Deed file is required',
  }),
  
  segmentId: Joi.any().required().messages({
    'any.required': 'Segment ID is required',
  }).custom(async (value, helpers) => {
   try {
     const segment = await ebidding.companySegment.findUnique({ where: { id: value } });
  
     if (!segment) {
     return helpers.error('any.custom', { message: 'Segment ID not found' });
     }
     return value;
   } catch (dbError) {
     return helpers.error('any.invalid', { message: 'Invalid Segment ID format' });
   }
   }, 'Segment ID Database Check'),

  companyAddress : Joi.string().required().messages({
      'string.empty': 'company address is required',
      'any.required': 'company address is required',
    }),

  companyPhone : Joi.string().required().messages({
      'string.empty': 'company phone number is required',
      'any.required': 'company phone number is required',
    }),
  website : Joi.string().optional().allow(null)
});

const loginValidation = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': 'Email is required',
    'string.email': 'Must be a valid email',
    'any.required': 'Email is required',
  }),
  
  password: Joi.string().required().messages({
    'string.empty': 'Password is required',
    'any.required': 'Password is required',
  }),
  clientDeviceUuid: Joi.string().uuid().required().messages({
    'string.empty': 'Client device UUID is required',
    'string.uuid': 'Client device UUID must be a valid UUID',
    'any.required': 'Client device UUID is required',
  }),
});
export { registerValidation,loginValidation };