
import Chapter from '../../models/Chapter.js' 
import { createChapterSchema } from '../../schemas/chapters.js';

//ruta para crear un capítulo
let create = async(req,res,next) => {
    try {
      const { value, error } = createChapterSchema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
      const chapter = new Chapter(value);
      await chapter.save();
      res.status(201).json(chapter);
    } catch (err) {
      console.error(err);
      res.status(500).json({error:'Server error'});
      next(err);
    }
  };

export default create
  //Si la validación falla, enviamos una respuesta de error 400 con el mensaje de error de Joi. Si la validación tiene éxito, creamos un nuevo objeto de capítulo utilizando los datos validados y lo guardamos en la base de datos con Mongoose.