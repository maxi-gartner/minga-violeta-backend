import {Router} from 'express';
import read from "../controllers/mangas/get_mangas.js"
import create from '../controllers/mangas/create.js'
import validator from '../middlewares/validator.js'
import { mangasCreate } from '../schemas/mangas.js';
import titleExistsCreate from '../middlewares/exists_title.js.js';
import passport from 'passport';

let router = Router();
router.get('/', passport.authenticate('jwt', {session: false}), read)
router.post('/', passport.authenticate('jwt', {session: false}), validator(mangasCreate), titleExistsCreate, create)

export default router