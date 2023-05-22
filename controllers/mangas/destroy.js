import Manga from '../../models/Manga.js'

let destroy = async (req, res, next) => {
    try {
        let destroyed = await Manga.findOneAndDelete({_id: req.params.id})
        if(destroyed) {
            return res.status(200).json({
                success: true,
                message: ["Manga has been deleted"]
            })
        }else{
            return res.status(200).json({
                success: false,
                message: ["Not found"]
            })
        }
    } catch (error) {
        next(error)
    }
}

export default destroy