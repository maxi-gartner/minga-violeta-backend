import Company from '../models/Company.js'

async function authorExistsCreate(req,res,next){
    const company = await Company.findOne({user_id: req.body.user_id})
    if(company){
        return res.status(400).send('user already exist!')
    }
    return next()
}
export default authorExistsCreate