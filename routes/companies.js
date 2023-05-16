import {Router} from 'express';
import read from "../controllers/authors/read.js"
import create from '../controllers/companies/create.js'
import validator from '../middlewares/validator.js'
import {companiesCreate} from '../schemas/companiesCreate.js'
import companyExistCreate from '../middlewares/companyExistCreate.js'
import passport from 'passport';

let router = Router();

router.get('/', read)
router.post('/', passport.authenticate('jwt', {session: false}), validator(companiesCreate), companyExistCreate, create)

export default router;
