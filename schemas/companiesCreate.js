import joi from 'joi';

export const companiesCreate = joi.object({
    name: joi.string()
        .max(30)
        .required()
        .messages({
            'any.required': 'Name required',
            'string.empty': 'Name required',
            'string.max': 'Name too large'
        }),
    logo: joi.string()
        .uri()
        .messages({
        'string.empty': 'Logo required',
        'string.uri': 'Invalid logo URL',
        }),
    website: joi.string()
        .uri()
        .messages({
        'string.empty': 'Website URL required',
        'string.uri': 'Invalid website URL',
        }),
    description: joi.string()
        .min(5)
        .max(300)
        .required()
        .messages({
            'any.required': 'Description required',
            'string.empty': 'Description required',
            'string.min': 'Description too large',
            'string.max': 'Description too large'
        }),
    active: joi.boolean()
})
