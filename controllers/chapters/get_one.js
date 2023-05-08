import Chapter from '../../models/Chapter.js'

let get_one = async(req,res,next) => {
    try {
        let one = await Chapter.findOne({
            _id: req.params.id}, 'pages -_id')

        return res.status(200).json({
            success: true,
            response: one
        })
    }
    catch (error) {
        next(error)
    }
}

export default get_one
