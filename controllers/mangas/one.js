import createHttpError from 'http-errors'
import Manga from './../../models/Manga.js'

let one = async (req, res, next) => {
    try {
        let {manga_id} = req.params
        let one = await Manga.findOne({
            _id: manga_id
            },'title cover_photo')
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