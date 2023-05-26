import {Router} from 'express';
import create from '../controllers/companies/create.js'
import validator from '../middlewares/validator.js'
import {companiesCreate} from '../schemas/companiesCreate.js'
import companyExistCreate from '../middlewares/companyExistCreate.js'
import passport from 'passport';
import admin from '../controllers/companies/admin.js';
import read from '../controllers/companies/read.js'

let router = Router();

router.get('/admin', passport.authenticate('jwt', {session: false}), admin)
router.post('/', passport.authenticate('jwt', {session: false}), validator(companiesCreate), companyExistCreate, create)
router.get('/', read)
export default router;
