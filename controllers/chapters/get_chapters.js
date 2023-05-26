import createHttpError from 'http-errors'
import Chapter from './../../models/Chapter.js'

let read = async (req, res, next) => {
    let queries = {}
    let sort = {}
    let pagination = {
        limit: 4,
        page :1
    }
    if(req.query.manga_id){
        queries.manga_id = req.query.manga_id
    }
    if(req.query.order){
        sort.title = req.query.order
    }
    if(req.query.page){
        pagination.page = req.query.page
    }
    if(req.query.limit){
        pagination.limit = req.query.limit
    }
    console.log(queries);
    try {
        let all = await Chapter
            .find(queries, "order title cover_photo")
            .sort(sort)
            .skip(pagination.page > 0 ? (pagination.page-1)*pagination.limit : 0)
            .limit(pagination.limit > 0 ? pagination.limit : 0)
        if (all.length > 0) {
            return res.status(200)
                .json({
                    success: true,
                    chapters: all
                })
        }
        return next(createHttpError(404, 'El recurso no se encontro'))
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export default read