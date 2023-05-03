import {Router} from 'express';
import read from '../controllers/users/read.js'
import create from '../controllers/auth/create.js';
import validator from '../middlewares/validator.js';
import {authCreateSignUp} from '../schemas/authCreate.js'

let router = Router();

router.get("/", read)
router.post('/signup', validator(authCreateSignUp), create)
router.post('/signin')
router.post('signout')

export default router;