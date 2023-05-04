import Company from '../models/Company.js'

async function authorExistsCreate(req,res,next){
    const company = await Company.findOne({user_id: req.body.user_id})
    if(company){
<<<<<<< HEAD
        return res.status(400).json({
            success: false,
            message: ['user already exist!']
        })
=======
        return res.status(400).send('user already exist!')
>>>>>>> 896b7a9ac158740c56829d54a88a2e5745961f5c
    }
    return next()
}
export default authorExistsCreate