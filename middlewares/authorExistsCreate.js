import Author from '../models/Author.js'

async function authorExistsCreate(req,res,next){
    req.body.user_id = req.user.id
    req.body.active = false
    const author = await Author.findOne({user_id: req.body.user_id})
    if(author){
        return res.status(400).json({
            success: false,
            message: ['Author already exist!']
        })
    }
    return next()
}
export default authorExistsCreate