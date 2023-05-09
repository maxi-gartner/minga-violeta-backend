import createHttpError from 'http-errors'
import Chapter from '../../models/Chapter.js'

let one = async (req, res, next) => {
    try {
        let {manga_id} = req.params
        let one = await Chapter.findOne({
            manga_id: manga_id
            }, "order title cover_photo -_id")
        return res.status(200).json({
            success: 'ok',
            response: one
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export default one