import {Router} from 'express';
import passport from 'passport';
import read from "../controllers/mangas/get_mangas.js"
import get_one from "../controllers/mangas/get_one.js"
import create from '../controllers/mangas/create.js'
import validator from '../middlewares/validator.js'
import { mangasCreate } from '../schemas/mangas.js';
import titleExistsCreate from '../middlewares/exists_title.js.js';
import get_me from "../controllers/mangas/get_me.js"
import finds_id from '../middlewares/finds_id.js'
import update from '../controllers/mangas/update.js'
import destroy from '../controllers/mangas/destroy.js'
import is_active from '../middlewares/is_active.js'
import is_property_of from '../middlewares/is_property_of.js'

let router = Router();
router.get("/me", passport.authenticate('jwt', {session: false}), finds_id, get_me)
router.get('/', passport.authenticate('jwt', {session: false}), read)
router.post('/', passport.authenticate('jwt', {session: false}), validator(mangasCreate), titleExistsCreate, create)
router.get("/:id",passport.authenticate('jwt', {session: false}), get_one)
router.put("/:id",passport.authenticate('jwt', {session: false}), finds_id, is_active, is_property_of, update)
router.delete("/:id",passport.authenticate('jwt', {session: false}), finds_id, is_active, is_property_of, destroy)

export default router