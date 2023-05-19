import Manga from '../../models/Manga.js'

const update = async(req, res, next) => {
    try {
        let update = await Manga.findByIdAndUpdate(
            req.params.id,
            req.body,
            {new: true}
        ).populate("category_id")
        if (update){
            return res.status(200).json({
                success: true,
                message: ["Manga updated successfully"],
                update: update
            })
        }else{
            return res.status(404).json({
                success: false,
                message: ["Not found"],
            })
        }
        
    } catch (error) {
        next(error);
    }
};

export default update