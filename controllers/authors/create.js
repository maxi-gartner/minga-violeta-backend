import Author from '../../models/Author.js'
import User from '../../models/User.js'

let create = async(req, res, next) => {
    try{
        let one = await Author.create(req.body)
        await User.findByIdAndUpdate(
            req.user.id,
            {
                role: 1,
                photo: req.body.photo
            },
            { new: true }
        );
        return res.status(201).json({
            author: one,
            success: true
        })
    } catch(error){
        next(error)
    }
}

export default create