import express from 'express';
import userRouter from './auth.js'
import autorRouter from './authors.js'
import categoryRouter from './categories.js'
import companyRouter from './companies.js'
import chapterRouter from './chapters.js'
import mangaRouter from './mangas.js'
import donationsRouter from "./donations.js"
//const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Minga API',
    subtitle: 'Subtitle Minga API',
  });
});



router.use('/auth', userRouter)
router.use('/authors', autorRouter)
router.use('/categories',categoryRouter)
router.use('/companies', companyRouter)
router.use('/chapters', chapterRouter)
router.use('/mangas', mangaRouter)
router.use('/donate', donationsRouter)

export default router;