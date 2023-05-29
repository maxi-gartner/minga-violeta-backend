import User from '../../models/User.js'
import jwt from "jsonwebtoken";

const verifyEmail = async (req, res, next) => {
    try {
        const verify_code = req.query.verify_code
        if (!verify_code) {
            return res.status(404).json('Verify code not found')
        }
        const user = await User.findOne({ verify_code })
        if (user) {
            user.is_verified = true
            await user.save()
            const token = jwt.sign(
                { id: user._id },
                process.env.SECRET,
                { expiresIn: 60 * 60 * 24 }
            )
            return res.redirect('http://localhost:5173/auth/signin/login')
        } else {
            res.status(404).json("Mail's verify or token's validation failed")
        }

    } catch (error) {
        console.log(error)
        res.status(500).json(error.message)
    }
} 

export default verifyEmail