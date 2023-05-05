import Author from "../../models/Author";

/* let one = async (req,res,next) => {
    try {
        let {user_id} = req.params
        let one = await Author.findOne({_id: user_id}, 'title cover_photo')
        return res.status(200).json({
            success:'ok',
            response: one
        })
    }catch (e) {
        next(e);
    }
} */

let one = async (req,res,next) => {
    try {
        let {user_id} = req.params
        let one = await Author.findById(user_id, 'title -_id')
        return res.status(200).json({
            success:'ok',
            response: one
        })
    }catch (e) {
        next(e);
    }
}

export default one