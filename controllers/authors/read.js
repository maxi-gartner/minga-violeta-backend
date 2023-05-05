import createHttpError from 'http-errors'
import Author from './../../models/Author.js'

let read = async (req, res, next) => {          //la funcion controladora debe ser asincrona para poder esperar la respuesta de MONGO
    let queries = {}
    if(req.queries.name){
        //queries.name = {"$regex": req.queries.name, '$options': 'i'}
        queries.name = new RegExp(req.queries.name.trim(), 'i')
    }
    if(req.queries.city){
        //queries.city = {"$regex": req.queries.city, '$options': 'i'}
        queries.city = new RegExp(req.queries.city.trim(), 'i')
    }
    try {//utilizo la sintaxis de try/catch para intentar algo y catchear lo errores que puedan surgir  

        /* let all = await Author.find({
            title: { "$regex": 'ga', $options: 'i'} // busca todos los que vengan con ga
        }, 'title cover photo author')   */   //utilizo el método find() para buscar todos los recursos del modelo (que en este caso es CATEGORY)


        /* let all = await Author.find({name: "DC COMICS"}).select("name -id") //te trae el name y se le saca el id
            if (all.length > 0) {
                return res.status(200)              //configuro la respuesta que le tengo que enviar al cliente (front)
                    .json({
                        authors: all
                    })
        } */

        let all = await Author.find(queries) //te trae el name y se le saca el id
            if (all.length > 0) {
                return res.status(200)              //configuro la respuesta que le tengo que enviar al cliente (front)
                    .json({
                        authors: all
                    })
        }
        
        return next(createHttpError(404, 'El recurso no se encontro'))
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export default read