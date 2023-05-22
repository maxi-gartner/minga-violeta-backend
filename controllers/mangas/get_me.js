import Manga from '../../models/Manga.js'

let me = async (req, res, next) => {
    try {
        const id = req.body.author_id
        console.log(id);
        let me = await Manga.find({
            author_id: id
        }).populate("category_id")
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