import createHttpError from 'http-errors'
import User from './../../models/User.js'

let read = async (req, res, next) => {          //la funcion controladora debe ser asincrona para poder esperar la respuesta de MONGO
    try {                                   //utilizo la sintaxis de try/catch para intentar algo y catchear lo errores que puedan surgir
        let all = await User.find()     //utilizo el método find() para buscar todos los recursos del modelo (que en este caso es CATEGORY)
        if (all.length > 0) {
            return res.status(200)              //configuro la respuesta que le tengo que enviar al cliente (front)
                .json({
                    users: all
                })
        }
        return next(createHttpError(404, 'El recurso no se encontro'))
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export default read