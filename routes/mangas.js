import {Router} from 'express';
import read from "../controllers/mangas/read.js"
import get_one from "../controllers/mangas/get_one.js"
import create from '../controllers/mangas/create.js'
import validator from '../middlewares/validator.js'
import { mangasCreate } from '../schemas/mangas.js';
import passport from '../middlewares/passport.js'
let router = Router();

router.get("/:id",passport.authenticate('jwt', {session: false}), get_one)
router.get("/", read)
router.post('/', validator(mangasCreate), create)

export default router