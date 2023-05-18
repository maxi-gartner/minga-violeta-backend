import { Router } from 'express';
import create from '../controllers/authors/create.js'
import validator from '../middlewares/validator.js'
import { authorCreate } from '../schemas/authorsCreate.js'
import authorExistsCreate from '../middlewares/authorExistsCreate.js'
import passport from '../middlewares/passport.js'
import admin from '../controllers/authors/admin.js';

let router = Router();

router.get('/admin', passport.authenticate('jwt', { session: false }), admin)
router.post('/', passport.authenticate('jwt', { session: false }), validator(authorCreate), authorExistsCreate, create)

export default router;
