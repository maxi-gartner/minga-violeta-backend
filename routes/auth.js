import {Router} from 'express';
import read from '../controllers/users/read.js'
import create from '../controllers/auth/signUp.js';
import signIn from '../controllers/auth/signIn.js';
import accountExistsSignIn from '../middlewares/accountSignIn.js';
import validator from '../middlewares/validator.js';
import isVerified from '../middlewares/isVerified.js'
import passwordIsOk from '../middlewares/passIsOk.js';
import { authCreateSignUp, authCreateSignIn } from "../schemas/authCreate.js";
import accountExistsSignUp from '../middlewares/accountSignUp.js';
import passport from '../middlewares/passport.js'
import signout from '../controllers/auth/signOut.js';

let router = Router();

router.get("/", read)
router.post('/signup', validator(authCreateSignUp), accountExistsSignUp, create)
router.post('/signin', validator(authCreateSignIn ), accountExistsSignIn, isVerified, passwordIsOk, signIn)
router.post('/signout', passport.authenticate('jwt', {session: false}), signout)

export default router;