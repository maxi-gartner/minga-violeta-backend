import joi from 'joi'

export const mangasCreate = joi.object({
    author_id: joi.string(),

    company_id: joi.string(),

    title: joi.string()
        .required()
        .min(3)
        .max(30)
        .messages({
            'any.required': 'Title required',
            'string.empty': 'Title cant be empty',
            'string.min': 'Title is too short',
            'string.max': 'Title is too large'
        }),

    cover_photo: joi.string(),

    description: joi.string()
        .required()
        .min(10)
        .max(300)
        .messages({
            'any.required': 'Description is required',
            'string.empty': 'Description cant be empty',
            'string.min': 'Description is too short',
            'string.max': 'Description is too large'
        }),

    category_id: joi.string()
        .required()
        .messages({
            'any.required': 'Category is required',
            'string.empty': 'Category cant be empty'
        }),

})