import Joi from 'joi';

const updateProfileValidation = Joi.object({
    fullName: Joi.string()
        .max(150)
        .messages({
            'string.base': 'Nama lengkap harus berupa teks.',
            'string.empty': 'Nama lengkap tidak boleh kosong.',
            'string.max': 'Nama lengkap tidak boleh melebihi 150 karakter.',
        }),

    urlImage: Joi.string()
        .uri() 
        .optional() 
        .allow(null, '') 
        .messages({
            'string.base': 'URL gambar harus berupa teks.',
            'string.uri': 'URL gambar harus berupa URL yang valid.',
        }),

    phone: Joi.string()
        .pattern(/^[0-9]{8,15}$/) 
        .optional() 
        .messages({
            'string.base': 'Nomor telepon harus berupa teks.',
            'string.empty': 'Nomor telepon tidak boleh kosong.',
            'string.pattern.base': 'Nomor telepon harus terdiri dari 8 hingga 15 digit angka.',
        }),
});

const updatePasswordValidation = Joi.object({
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

    passwordConfirm: Joi.string()
        .valid(Joi.ref('password')) 
        .required()
        .messages({
            'string.base': 'Password confirmation must be a string.',
            'string.empty': 'Password confirmation cannot be empty.',
            'any.required': 'Password confirmation is required.',
            'any.only': 'Password confirmation does not match the new password.', 
        }),
});

export { updateProfileValidation, updatePasswordValidation};