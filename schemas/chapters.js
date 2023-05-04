import Joi from "joi";

//objeto de esquema Joi que define la forma de los datos de entrada que se espera para la creación de un capítulo:
export const createChapterSchema = Joi.object({
  
  manga_id: Joi.string()
            .min(4)
<<<<<<< HEAD
            .required(),
            
=======
            .required()
            .messages({
              'string.base': `"manga_id" should be a string`,
              'string.min': `"manga_id" should have a minimum length of {#limit}`,
              'any.required': `"manga_id" is required`
            }),
  
>>>>>>> b17d2eae6e8dca1292135f5f09b295b633762d80
  title: Joi.string()
            .min(2)
            .max(30)
            .required()
            .messages({
              'string.base': `"title" should be a string`,
              'string.min': `"title" should have a minimum length of {#limit}`,
              'string.max': `"title" should have a maximum length of {#limit}`,
              'any.required': `"title" is required`
            }),
            
  cover_photo: Joi.string()
            .uri()
            .messages({
              'string.base': `"cover_photo" should be a string`,
              'string.uri': `"cover_photo" should be a valid uri`
            }),
            
  pages: Joi.array()
            .items(Joi.string().uri())
            .required()
            .messages({
              'any.required': `"pages" is required`,
              'array.base': `"pages" should be an array`,
              'array.includesRequiredUnknowns': `"pages" must contain at least one valid uri`,
              'string.empty': `"pages" should not be empty`,
              'string.uri': `"pages" should be a valid uri`
            }),
            
  order: Joi.number()
            .integer()
            .min(1)
            .required()
            .messages({
              'number.base': `"order" should be a number`,
              'number.integer': `"order" should be an integer`,
              'number.min': `"order" should be greater than or equal to {#limit}`,
              'any.required': `"order" is required`
            })
});
