import Chapter from '../models/Chapter.js'

async function chapterExistsCreate(req,res,next){
    const chapter = await Chapter.findOne({title: req.body.title})
    if(chapter){
        return res.status(400).json({
            success: false,
            message: ["¡Chapter already exist!"],
        });
    }
    return next()
}
export default chapterExistsCreate