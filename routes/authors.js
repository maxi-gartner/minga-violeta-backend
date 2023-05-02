import {Router} from 'express';
import read from "../controllers/authors/read.js"
import create from '../controllers/authors/create.js'
import validator from '../middlewares/validator.js'
import {authorCreate} from '../schemas/authorsCreate.js'
import authorExistsCreate from '../middlewares/authorExistsCreate.js'

let router = Router();

router.get("/", read)
router.post('/', validator(authorCreate), authorExistsCreate, create)

export default router;
