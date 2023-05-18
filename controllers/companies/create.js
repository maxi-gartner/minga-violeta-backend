import Company from '../../models/Company.js'
import User from '../../models/User.js';

let create = async(req, res, next) => {
    try{
        let one = await Company.create(req.body)
        await User.findByIdAndUpdate(
            req.user.id,
            {
                role: 2,
                photo: req.body.photo
            },
            { new: true }
        );
        return res.status(201).json({
            company: one,
            success: true
        })
    } catch(error){
        next(error)
    }
}

export default create