import Auth from "../models/Auth.js";

async function accountExistsSignUp(req, res, next) {
  const user = await Auth.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({
      success: false,
      message: ["¡User already exist!"],
    });
    
      
  }
  return next();
}

export default accountExistsSignUp;
