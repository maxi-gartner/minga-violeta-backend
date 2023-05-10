import createHttpError from 'http-errors'
import Manga from './../../models/Manga.js'

let read = async (req, res, next) => {
    let queries = {}
    if(req.query._id){
        queries._id = req.query._id
    }
    if(req.query.author_id){
        queries.author_id = req.query.author_id
    }
    if(req.query.company_id){
        queries.company_id = req.queries.category_id
    }
    if(req.query.title){
        queries.title = new RegExp(req.query.title.trim(), 'i')
    }
    if(req.query.cover_photo){
        queries.cover_photo = new RegExp(req.query.cover_photo.trim(), 'i')
    }
    if(req.query.description){
        queries.description = new RegExp(req.query.description.trim(), 'i')
    }
    if(req.query.category_id){
        queries.category_id = req.query.category_id
    }
    console.log(queries);
    try {
        let all = await Manga.find(queries)
        if (all.length > 0) {
            return res.status(200)
                .json({
                    mangas: all
                })
        }
        return next(createHttpError(404, 'El recurso no se encontro'))
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export default read