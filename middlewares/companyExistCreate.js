import Company from '../models/Company.js'

async function authorExistsCreate(req,res,next){
    req.body.user_id = req.user.id
    req.body.active = true
    const company = await Company.findOne({user_id: req.body.user_id})
    if(company){
        return res.status(400).json({
            success: false,
            message: ['Company already exist!']
        })
    }
    return next()
}
export default authorExistsCreate