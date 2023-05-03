import Manga from '../../models/Manga.js'

let create = async(req, res, next) => {
    try {
        let one = await Manga.create(req.body)
        return res.status(201).json({
            id: one._id,
            timestamps: one.createdAt
        })
    }   catch (error){
        next (error)
    }
}

export default create