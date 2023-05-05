import {Router} from 'express';
import read from "../controllers/authors/read.js"
import create from '../controllers/authors/create.js'
import validator from '../middlewares/validator.js'
import {authorCreate} from '../schemas/authorsCreate.js'
import authorExistsCreate from '../middlewares/authorExistsCreate.js'
import passport from '../middlewares/passport.js'
//import one from '../controllers/authors/one.js'

let router = Router();

router.get("/", read)
router.post('/', passport.authenticate('jwt', {session: false}), validator(authorCreate), authorExistsCreate, create)
//router.get("/:user_id", one)

export default router;
