import {Router} from 'express';
import read from "../controllers/mangas/read.js"
import create from '../controllers/mangas/create.js'
import validator from '../middlewares/validator.js'
import { mangasCreate } from '../schemas/mangas.js';
let router = Router();

router.get("/", read)
router.post('/', validator(mangasCreate), create)

export default router