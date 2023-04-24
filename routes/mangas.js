import {Router} from 'express';
import read from "../controllers/mangas/read.js"
let router = Router();

router.get("/", read)

export default router