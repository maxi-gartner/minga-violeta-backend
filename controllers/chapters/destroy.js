import Chapter from "../../models/Chapter.js";

const destroy = async(req,res,next) => {
    try {
        let destroyed = await Chapter.findOneAndDelete({_id: req.params.id})
        if(destroyed){
            return res.status(200).json({
                success: true,
                destroyed
            }) 
        } else {
            return res.status(404).json({
                success: false,
                message: 'not found'
            })
        }
        
    } catch(error){
        next(error)
    }
}
export default destroy