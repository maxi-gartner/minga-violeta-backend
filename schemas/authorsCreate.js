import joi from 'joi';

export const authorCreate = joi.object({
    name: joi.string()
        .min(1)
        .max(30)
        .required()
        .messages({
            'any.required': 'NAME_REQUIRED',
            'string.empty': 'NAME_REQUIRED',
            'string.min': 'NAME_TOO_SHORT',
            'string.max': 'NAME_TOO_LARGE'
        }),
    last_name: joi.string()
        .min(1)
        .max(30)
        .required()
        .messages({
            'any.required': 'LAST_NAME_REQUIRED',
            'string.empty': 'LAST_NAME_REQUIRED',
            'string.min': 'LAST_NAME_TOO_SHORT',
            'string.max': 'LAST_NAME_TOO_LARGE'
        }),
    city: joi.string()
        .min(1)
        .max(30)
        .required()
        .messages({
            'any.required': 'CITY_REQUIRED',
            'string.empty': 'CITY_REQUIRED',
            'string.min': 'CITY_TOO_SHORT',
            'string.max': 'CITY_TOO_LARGE'
        }),
    country: joi.string()
        .min(1)
        .max(30)
        .required()
        .messages({
            'any.required': 'COUNTRY_REQUIRED',
            'string.empty': 'COUNTRY_REQUIRED',
            'string.min': 'COUNTRY_TOO_SHORT',
            'string.max': 'COUNTRY_TOO_LARGE'
        }),
    date: joi.date()
        .raw()
        .required()
        .messages({
        'any.required': 'DATE_REQUIRED'
    }),
    photo: joi.string()
        .uri()
        .messages({
        'any.required': 'IMG_REQUIRED',
        'string.empty': 'IMG_REQUIRED',
        'string.uri': 'INVALID_URL',
    }),
    active: joi.boolean()
        .required(),
    user_id: joi.required()
})