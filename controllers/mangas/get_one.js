import createHttpError from 'http-errors'
import Manga from '../../models/Manga.js'

let one = async (req, res, next) => {
    try {
        let {id} = req.params
        let one = await Manga.findOne({
            _id: id
            }, "-_id").populate("category_id", "-_id")
                        .populate("company_id", "-_id")
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