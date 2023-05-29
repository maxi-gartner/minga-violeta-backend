import express from "express";
import passport from "../middlewares/passport.js";
import donations from  "../controllers/donations/create.js";

let router = express.Router()

const {create} = donations

router.post("/", passport.authenticate("jwt",{session:false}), create)

export default router