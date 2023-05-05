import joi from 'joi'

export const mangasCreate = joi.object({
    author_id: joi.string(),

    company_id: joi.string(),

    title: joi.string()
        .required()
        .min(3)
        .max(30)
        .messages({
            'any.required': 'TITLE_REQUIRED',
            'string.empty': 'TITLE_REQUIRED',
            'string.min': 'TITLE_TOO_SHORT',
            'string.max': 'TITLE_TOO_LARGE'
        }),

    cover_photo: joi.string(),

    description: joi.string()
        .required()
        .min(10)
        .max(300)
        .messages({
            'any.required': 'DESCRIPTION_REQUIRED',
            'string.empty': 'DESCRIPTION_REQUIRED',
            'string.min': 'DESCRIPTION_TOO_SHORT',
            'string.max': 'DESCRIPTION_TOO_LARGE'
        }),

    category_id: joi.string()
        .required()
        .messages({
            'any.required': 'CATEGORY_REQUIRED',
            'string.empty': 'CATEGORY_REQUIRED'
        }),

})