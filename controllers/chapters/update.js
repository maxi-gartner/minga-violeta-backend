import Chapter from "../../models/Chapter.js";

const update = async (req, res, next) => {
    try {
        let update = await Chapter.updateOne({ _id: req.params.id }, req.body);
        if (update.modifiedCount) {
        return res.status(200).json({
            success: true,
            response: "updated",
            update,
        });
        } else {
        return res.status(404).json({
            success: false,
            response: "not found",
        });
        }
    } catch (error) {
        next(error);
    }
};
export default update;
