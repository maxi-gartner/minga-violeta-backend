import joi from 'joi'

export const mangasCreate = joi.object({
    author_id: joi.string(),
    company_id: joi.string(),
    title: joi.string().required(),
    cover_photo: joi.string(),
    description: joi.string().required(),
    category_id: joi.string().required(),
})