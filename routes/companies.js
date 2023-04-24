import {Router} from 'express';
import read from "../controllers/companies/read.js"
let router = Router();

router.get("/", read)

export default router