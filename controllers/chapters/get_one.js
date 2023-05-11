import Chapter from '../../models/Chapter.js'

let get_one = async(req,res,next) => {
    try {
        let one = await Chapter.findOne({
            _id: req.params.id}, 'pages -_id')

            if(one){
                return res.status(200).json({
                    success: true,
                    response: one
                })
            }
            return res.status(404).json({
                success: false,
                message: 'Chapter not found'
            })  
    }
    catch (error) {
        next(error)
    }
}

export default get_one
