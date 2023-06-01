import createHttpError from 'http-errors'
import Author from './../../models/Author.js'

let read = async (req, res, next) => {
    try {
        let all = await Author.find()
        if (all.length > 0) {
            return res.status(200)
                .json({
                    success: true,
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