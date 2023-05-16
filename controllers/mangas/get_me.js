import createHttpError from 'http-errors'
import Manga from '../../models/Manga.js'

let me = async (req, res, next) => {
    try {
        console.log(req.user);
        let me = await Manga.find()
        return res.status(200).json({
            success: 'ok',
            response: me
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export default me