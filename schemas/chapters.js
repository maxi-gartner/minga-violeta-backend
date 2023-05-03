import Joi from "joi";

//objeto de esquema Joi que define la forma de los datos de entrada que se espera para la creación de un capítulo:
export const createChapterSchema = Joi.object({
  manga_id: Joi.string()
<<<<<<< HEAD
  .min(4)
  .required()
  .messages({
    "string.min": "manga_id required "
  }),

=======
            .min(4)
            .required(),
            
>>>>>>> 7c36293db3833ea868c8d6b11e927d8c95b7c995
  title: Joi.string()
            .min(2)
            .max(30)
            .required(),
            
  cover_photo: Joi.string()
            .uri(),
            
  pages: Joi.array()
            .items(Joi.string().uri())
            .required()
            .messages({
                      'string.empty': '"pages" is not allowed to be empty',
                      'string.uri': '"pages" must be a valid uri'
}),
  order: Joi.number()
            .integer()
            .min(1)
            .required()
});
