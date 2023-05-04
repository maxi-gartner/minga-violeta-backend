
import Auth from "../../models/Auth.js";

const signout = async (req, res, next) => {
    const { email } = req.user
    try {
        await Auth.findOneAndUpdate(
            { email },
            { is_online: false },
            { new: true }
        )
        return res.status(200).send('ofline user')
    } catch (error) {
        next(error)
        
    }
}
export default signout