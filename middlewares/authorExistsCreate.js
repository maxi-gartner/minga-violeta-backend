import Author from '../models/Author.js'

async function authorExistsCreate(req,res,next){
    const author = await Author.findOne({user_id: req.body.user_id})
    if(author){
        return res.status(400).json({
            success: false,
            message: ['user already exist!']
        })
    }
    return next()
}
export default authorExistsCreate