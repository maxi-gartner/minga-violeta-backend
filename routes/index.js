import express from 'express';
import userRouter from './auth.js'
import autorRouter from './authors.js'
import categoryRouter from './categories.js'
import companyRouter from './companies.js'
import chapterRouter from './chapters.js'
import mangaRouter from './mangas.js'
const router = express.Router();
import { Server as SocketServer } from 'socket.io';
import http from 'http';
import cors from 'cors';

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Minga API',
    subtitle: 'Subtitle Minga API',
  });
});

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server, {
  cors: {
    origin: '*',
  }
});

app.use(cors())
io.on('connection', (socket) => {
  console.log(socket.id);
  socket.on('message', (message) =>{
    console.log(message);
    if(message.includes('anim')|| message.includes('mang')){
      socket.broadcast.emit('message', "manga list");
    }else if(message.includes('auth')){
      socket.broadcast.emit('message', ["In the navigation bar, click on new role and click on new author, Once the form is completed you will have new access"]);
    }else if(message.includes("compan")|| message.includes('regis')){
      socket.broadcast.emit('message', ["In the navigation bar, click on new role and click on new company, Once the form is completed you will have new access"]);
    }else{
      socket.broadcast.emit('message', ["No tengo respuestas para esto"]);
    }
  })
})

server.listen(4000);


router.use('/auth', userRouter)
router.use('/authors', autorRouter)
router.use('/categories',categoryRouter)
router.use('/companies', companyRouter)
router.use('/chapters', chapterRouter)
router.use('/mangas', mangaRouter)

export default router;