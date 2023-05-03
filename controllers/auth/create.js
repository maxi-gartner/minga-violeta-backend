//import createHttpError from "http-errors";
import Auth from "../../models/Auth.js";

let create = async (req, res, next) => {
    try {
        req.body.role = 0;
        req.body.is_online = false;
        req.body.is_verified = false;
        req.body.verify_code = 'codigo';

        let one = new Auth(req.body)
        await one.save()
        return res.status(201).json({
            user: one.email,
            success: true,
            timestamps: one.createdAt

        })
        
    } catch (error) {
        next(error)
    }
}

export default create
