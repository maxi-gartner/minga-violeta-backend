import {Router} from 'express';
import get_chapters from '../controllers/chapters/get_chapters.js';
import read from '../controllers/chapters/read.js';
import create from '../controllers/chapters/create.js';
import validator from '../middlewares/validator.js'
import { createChapterSchema } from '../schemas/chapters.js';
import chapterExistsCreate from '../middlewares/chapterExistCreate.js'; 
import passport from '../middlewares/passport.js';
import one from '../controllers/chapters/get_one.js';

let router = Router();

router.get('/:id', passport.authenticate('jwt', {session: false}), one)
router.get("/", passport.authenticate('jwt', {session: false}), get_chapters)
router.post('/', passport.authenticate('jwt', {session: false}), validator(createChapterSchema), chapterExistsCreate, create)

export default router

