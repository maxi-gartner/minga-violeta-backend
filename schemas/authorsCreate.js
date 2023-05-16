import joi from 'joi';

export const authorCreate = joi.object({
    name: joi.string()
        .max(30)
        .required()
        .messages({
            'any.required': 'Name required',
            'string.empty': 'Name required',
            'string.max': 'Name too large'
        }),
    last_name: joi.string()
        .max(30)
        .messages({
            'string.empty': 'Last name required',
            'string.max': 'Last name too large'
        }),
    city: joi.string()
        .max(30)
        .required()
        .messages({
            'any.required': 'Name city required',
            'string.empty': 'Name city required',
            'string.max': 'Name city too large'
        }),
    country: joi.string()
        .max(30)
        .required()
        .messages({
            'any.required': 'Country required',
            'string.empty': 'Country required',
            'string.max': 'Country too large'
        }),
    date: joi.date()
        .raw()
        .messages({
        'any.required': 'Date required'
    }),
    photo: joi.string()
        .uri()
        .messages({
        'string.empty': 'Img required',
        'string.uri': 'Invalid URL',
    }),
    active: joi.boolean()
})