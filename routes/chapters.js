import {Router} from 'express';
import get_chapters from '../controllers/chapters/get_chapters.js';
import read from '../controllers/chapters/read.js';
import create from '../controllers/chapters/create.js';
import validator from '../middlewares/validator.js'
import { createChapterSchema } from '../schemas/chapters.js';
import chapterExistsCreate from '../middlewares/chapterExistCreate.js'; 
import one from '../controllers/chapters/get_one.js';
import finds_id from '../middlewares/find_id.js';
import get_me from '../controllers/chapters/get_me.js';
import update from '../controllers/chapters/update.js';
import passport from '../middlewares/passport.js';
import destroy from '../controllers/chapters/destroy.js';
import isPropertyOf from '../middlewares/is_property_of.js';


let router = Router();


router.get('/me', passport.authenticate('jwt', {session: false}), finds_id, isPropertyOf, get_me)
router.get("/", passport.authenticate('jwt', {session: false}), get_chapters)
router.post('/', passport.authenticate('jwt', {session: false}), validator(createChapterSchema), chapterExistsCreate, create)
router.get('/:id', passport.authenticate('jwt', {session: false}), one)
router.put('/:id', passport.authenticate('jwt', {session: false}), update)
router.delete('/:id', passport.authenticate('jwt', {session: false}), destroy)

export default router

