
import Auth from "../../models/Auth.js";

const signout = async (req, res, next) => {
    const { email } = req.user
    try {
        await Auth.findOneAndUpdate(
            { email },
            { is_online: false },
            { new: true }
        )
        return res.status(200)
        .json({
        success: false,
        message: 'Offline User!'
        }) 
    } catch (error) {
        next(error)
    }
}
export default signout