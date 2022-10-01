import express, { Express } from 'express';

import morgan from 'morgan';
import cors from 'cors';
import http from 'http';

import { router } from './routes';
import { Server } from 'socket.io';

const app: Express = express();
const port = 3001;
const server = app.listen(port, () => console.log(`listening on port ${port}`));

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use('/', router);

const socket = http.createServer(app);

const io = new Server(socket, {
  cors: {
    origin: "http://localhost:3001",
    methods: ["GET", "POST"],
  },
}).listen(server);

io.on('connection', (socket) => {
  console.log(`${socket.id} has joined room`);

  socket.on('send_message', (data) => {
    socket.broadcast.emit('receive_message', () => {

    })
  })


  socket.on('disconnect', (data) => {
    console.log(`${socket.id} has disconnected`);
  })
});



