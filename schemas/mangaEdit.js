import joi from 'joi';

export const mangaEdit = joi.object({
    title: joi.string()
        .max(30)
        .messages({
            'string.max': 'Name too large'
        }),
    cover_photo: joi.string()
        .uri()
        .messages({
        'string.uri': 'Invalid URL',
    }),
    description: joi.string()
        .max(1000)
        .min(30)
        .messages({
            'string.min': 'Last name too small',
            'string.max': 'Last name too large'
        })
})