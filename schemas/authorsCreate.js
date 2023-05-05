import joi from 'joi';

export const authorCreate = joi.object({
    name: joi.string()
        .max(30)
        .required()
        .messages({
            'any.required': 'NAME_REQUIRED',
            'string.empty': 'NAME_REQUIRED',
            'string.max': 'NAME_TOO_LARGE'
        }),
    last_name: joi.string()
        .max(30)
        .messages({
            'string.empty': 'LAST_NAME_REQUIRED',
            'string.max': 'LAST_NAME_TOO_LARGE'
        }),
    city: joi.string()
        .max(30)
        .required()
        .messages({
            'any.required': 'CITY_REQUIRED',
            'string.empty': 'CITY_REQUIRED',
            'string.max': 'CITY_TOO_LARGE'
        }),
    country: joi.string()
        .max(30)
        .required()
        .messages({
            'any.required': 'COUNTRY_REQUIRED',
            'string.empty': 'COUNTRY_REQUIRED',
            'string.max': 'COUNTRY_TOO_LARGE'
        }),
    date: joi.date()
        .raw()
        .messages({
        'any.required': 'DATE_REQUIRED'
    }),
    photo: joi.string()
        .uri()
        .messages({
        'string.empty': 'IMG_REQUIRED',
        'string.uri': 'INVALID_URL',
    }),
    active: joi.boolean()
        .required()
})