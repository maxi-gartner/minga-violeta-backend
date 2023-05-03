import joi from 'joi';

export const companiesCreate = joi.object({
    name: joi.string()
        .max(30)
        .required()
        .messages({
            'any.required': 'NAME_REQUIRED',
            'string.empty': 'NAME_REQUIRED',
            'string.max': 'NAME_TOO_LARGE'
        }),
    logo: joi.string()
        .uri()
        .messages({
        'string.empty': 'LOGO_REQUIRED',
        'string.uri': 'INVALID_LOGO_URL',
        }),
    website: joi.string()
        .uri()
        .messages({
        'string.empty': 'WEBSITE_REQUIRED',
        'string.uri': 'INVALID_WEBSITE_URL',
        }),
    description: joi.string()
        .min(5)
        .max(300)
        .required()
        .messages({
            'any.required': 'DESCRIPTION_REQUIRED',
            'string.empty': 'DESCRIPTION_REQUIRED',
            'string.min': 'DESCRIPTION_TOO_SHORT',
            'string.max': 'DESCRIPTION_TOO_LARGE'
        }),
    active: joi.boolean(),
    user_id: joi.string(),
})
