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
});
export { registerValidation,loginValidation };