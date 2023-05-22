import {Router} from 'express';
import create from '../controllers/companies/create.js'
import validator from '../middlewares/validator.js'
import {companiesCreate} from '../schemas/companiesCreate.js'
import companyExistCreate from '../middlewares/companyExistCreate.js'
import passport from 'passport';
import admin from '../controllers/companies/admin.js';

let router = Router();

router.get('/admin', passport.authenticate('jwt', {session: false}), admin)
router.post('/', passport.authenticate('jwt', {session: false}), validator(companiesCreate), companyExistCreate, create)

export default router;
