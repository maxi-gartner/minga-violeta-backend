import Chapter from '../../models/Chapter.js'

let get_one = async(req,res,next) => {
    try {
        let one = await Chapter.findOne({
            _id: req.params.id}, 'pages title order -_id')
        let id_next = await Chapter.findOne({
            order: one.order + 1}, '_id')
        let id_prev = await Chapter.findOne({
            order: one.order - 1}, '_id')

            if(one){
                return res.status(200).json({
                    success: true,
                    response: one,
                    id_next: id_next?._id || null,
                    id_prev: id_prev?._id || null,
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
