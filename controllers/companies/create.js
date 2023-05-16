import Company from '../../models/Company.js'
import Auth from '../../models/Auth.js'

let create = async(req, res, next) => {
    try{
        console.log(req.body);
        let one = await Company.create(req.body)
        await Auth.findByIdAndUpdate(
            req.user.id,
            {
                role: 2,
                photo: req.body.photo
            },
            { new: true } // devuelve el usuario actualizado en lugar del anterior
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