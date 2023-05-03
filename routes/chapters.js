import {Router} from 'express';

import read from '../controllers/chapters/read.js';
import create from '../controllers/chapters/create.js';
import validator from '../middlewares/validator.js'
import { createChapterSchema } from '../schemas/chapters.js';
<<<<<<< HEAD
// import passport from '../middlewares/passport.js';
=======

>>>>>>> edb51f1ce17507dd71b1bf7eeff0330cd43fa8b6

let router = Router();

router.get("/", read)
router.post('/', validator(createChapterSchema) , create)

export default router