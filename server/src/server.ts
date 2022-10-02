import express, { Express } from 'express';
import session from 'express-session';

import morgan from 'morgan';
import cors from 'cors';
import http from 'http';

import { router } from './routes';
import { Server } from 'socket.io';

const app: Express = express();
const port = 3001;
const server = app.listen(port, () => console.log(`listening on port ${port}`));
const socket = http.createServer(app);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

// session middleware for obtaining cookies
app.use(session({
  secret: 'key that will sign the cookie',  //change at later point
  resave: false,
  saveUninitialized: false,
}))

app.use('/', router);


const io = new Server(socket, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
}).listen(server);

io.on('connection', (socket) => {
  console.log(`User ${socket.id} connected`);

  socket.on('send_message', (data) => {
    // socket.broadcast.emit('receive_message', () => {})
    console.log(data);
  });

  socket.on('disconnect', () => {
    console.log(`User ${socket.id} disconnected`);
  });

});

