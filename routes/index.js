import express from 'express';
import userRouter from './users.js'
import autorRouter from './authors.js'
import categoryRouter from './categories.js'
import companyRouter from './companies.js'
import chapterRouter from './chapters.js'
import mangaRouter from './mangas.js'
//const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Minga API' });
});

router.use('/users', userRouter)
router.use('/authors', autorRouter)
router.use('/companies', categoryRouter)
router.use('/companies', companyRouter)
router.use('/chapters', chapterRouter)
router.use('/mangas', mangaRouter)

export default router;
