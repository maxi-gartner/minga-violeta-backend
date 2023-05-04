import {Router} from 'express';

import read from '../controllers/chapters/read.js';
import create from '../controllers/chapters/create.js';
import validator from '../middlewares/validator.js'
import { createChapterSchema } from '../schemas/chapters.js';
// import passport from '../middlewares/passport.js';

let router = Router();

router.get("/", read)
router.post('/', validator(createChapterSchema) , create)

export default router