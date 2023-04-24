import Category from './../../models/Category.js'

let read = async(req,res,next) => { // la funcion debe ser asinmcrona para esperar la respuesta de mongoose
    try{//utilizo try/catch para intentar algo y sino te devuelve el error
        let all = await Category.find() // utilizo find() para buscar todos los recursos
        return res.status(200)
        .json({
            categories: all
        }) //configuro la respuesta que le tengo que enviar al ckliente
    }catch(error){
        console.log(error)
        return res.status(400)
        .json({
            error: 'ha ocurrido un error!'
        })

    }
}
export default read