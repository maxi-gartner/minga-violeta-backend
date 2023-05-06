import Auth from "../../models/Auth.js";
import  jwt  from "jsonwebtoken";

let signIn = async (req, res, next) => {
  try {
    let is_online = true;
      Auth.findOneAndUpdate({ email: req.body.email }, { is_online: true })
      const token = jwt.sign(
          { id: req.user._id },
          process.env.SECRET,
          {expiresIn : 60*60*24}
      )
      const user = {
          email: req.user.email,
          photo: req.user.photo,
          role: req.user.role
      }

      return res.status(200).json({
          user,
          token,
          success: true,
          message: 'user sig in!'
      })
  } catch (error) {
    next(error);
  }
};
export default signIn