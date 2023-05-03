import Joi from "joi";

//objeto de esquema Joi que define la forma de los datos de entrada que se espera para la creación de un capítulo:
export const createChapterSchema = Joi.object({
  manga_id: Joi.string()
<<<<<<< HEAD
            .min(4)
            .required()
            .messages({
                    'any.required': 'ID_REQUIRED',
                    'string.empty': 'ID_REQUIRED',
                    'string.min': 'ID_TOO_SHORT',
}),
  title: Joi.string()
            .min(2)
            .max(30)
            .required()
            .messages({
                      'any.required': 'TITLE_REQUIRED',
                      'string.empty': 'TITLE_REQUIRED',
                      'string.min': 'TITLE_TOO_SHORT',
                      'string.max': 'TITLE_TOO_LARGE',
}),
  cover_photo: Joi.string()
            .uri()
            .messages({
                      'any.required': 'COVER_PHOTO_REQUIRED',
                      'string.empty': 'COVER_PHOTO_REQUIRED',
                      'string.uri': 'INVALID_URL'
}),
  pages: Joi.array()
            .items(Joi.string().uri())
            .required()
            .messages({
                      'any.required': 'PAGES_REQUIRED',
                      'string.empty': 'PAGES_REQUIRED',
                      'string.uri': 'INVALID_URL'
}),
  order: Joi.number()
            .integer()
            .min(1)
            .required()
            .messages({
                      'any.required': 'ORDER_REQUIRED',
                      'string.empty': 'ORDER_REQUIRED',
                      'string.number': 'ORDER_NUMBER_REQUIRED'
})
=======
  .min(4)
  .required()
  .message({
    "string.min": "manga_id required "
  }),

  title: Joi.string()
  .min(2)
  .max(30)
  .required(),
  cover_photo: Joi.string()
  .uri(),
  pages: Joi.array()
  .items(Joi.string().uri())
  .required(),
  order: Joi.number()
  .integer()
  .min(1)
  .required(),
>>>>>>> edb51f1ce17507dd71b1bf7eeff0330cd43fa8b6
});
