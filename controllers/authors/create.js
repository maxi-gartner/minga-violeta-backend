import Author from '../../models/Author.js'
import Auth from '../../models/Auth.js'

let create = async(req, res, next) => {
    try{
        console.log("req", req.user._id)
        let one = await Author.create(req.body)
        await Auth.findByIdAndUpdate(
            req.user.id,
            {
                role: 1,
                photo: req.body.photo
            },
            { new: true } // devuelve el usuario actualizado en lugar del anterior
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