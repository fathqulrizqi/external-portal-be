import Joi from 'joi';

const registerValidation = Joi.object({
  email: Joi.string().email().required().messages({
    'string.empty': 'Email is required',
    'string.email': 'Must be a valid email',
    'any.required': 'Email is required',
  }),
  
  phone : Joi.string()
    .pattern(/^[0-9\-\+\s]+$/)
    .min(9)  
    .max(15)
    .required()
    .messages({
        'string.pattern.base': 'Phone number must only contain numbers, spaces, (+), or (-)',
        'string.min': 'Phone number must be at least 9 characters',
        'string.max': 'Phone number must not exceed 15 characters',
        'string.empty': 'Phone number is required',
        'any.required': 'Phone number is required'
    }),
  
  password: Joi.string()
  .min(10) 
  .pattern(new RegExp('[A-Z]'), { name: 'uppercase' }) 
  .pattern(new RegExp('[a-z]'), { name: 'lowercase' }) 
  .pattern(new RegExp('[0-9]'), { name: 'number' })
  .required()
  .messages({ 
    'string.empty': 'Password is required',
    'any.required': 'Password is required',
    'string.min': 'Password must be at least 10 characters long',
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
  application : Joi.string().required().messages({
    'string.empty': 'Invalid application Register',
    'any.required': 'Invalid application Register',
  })
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

  application: Joi.string().required().messages({
    'string.empty': 'Invalid application login',
    'any.required': 'Invalid application login',
  }),
});
export { registerValidation,loginValidation };