import Author from '../../models/Author.js'

let create = async(req, res, next) => {
    try{
        console.log("req", req.user._id)
        let one = await Author.create(req.body)
        return res.status(201).json({
            author: one,
            success: true
        })
    } catch(error){
        next(error)
    }
}

export default create