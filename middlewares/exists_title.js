import Manga from '../models/Manga.js'

async function existsTitle(req,res,next){
    const titleFind = await Manga.findOne({title: req.body.title})
    if(titleFind){
        return res.status(400).json({
            success: false,
            message: ["¡Manga's title already exists!"],
        });
    }
    return next()
}
export default existsTitle