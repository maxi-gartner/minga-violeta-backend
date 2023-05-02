import express from 'express';
import userRouter from './auth.js'
import autorRouter from './authors.js'
import categoryRouter from './categories.js'
import companyRouter from './companies.js'
import chapterRouter from './chapters.js'
import mangaRouter from './mangas.js'
//const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Minga API',
    subtitle: 'Subtitle Minga API',
  });
});

const midd1 = (req, res, next) => {
  console.log('Se accedio a categories')
  next()
}

router.use('/auth', userRouter)
router.use('/authors', autorRouter)
router.use('/categories', midd1 ,categoryRouter)
router.use('/companies', companyRouter)
router.use('/chapters', chapterRouter)
router.use('/mangas', mangaRouter)

export default router;