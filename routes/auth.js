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
import is_admin from '../middlewares/is_admin.js';
import updateAuthors from '../controllers/authors/update.js';
import updateCompanies from '../controllers/companies/update.js';

let router = Router();

router.get("/", read)
router.post('/signup', validator(authCreateSignUp), accountExistsSignUp, create)
router.post('/signin', validator(authCreateSignIn ), accountExistsSignIn, isVerified, passwordIsOk, signIn)
router.post('/signout', passport.authenticate('jwt', {session: false}), signout)
router.put('/role/author/:id', passport.authenticate('jwt', {session: false}), is_admin, updateAuthors)
router.put('/role/company/:id', passport.authenticate('jwt', {session: false}), is_admin, updateCompanies)

export default router;