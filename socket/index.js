import { Server } from 'socket.io';

const io = new Server({
  cors: {
    origin: 'http://localhost:3000',
  },
});

io.on('connection', (socket) => {
  io.emit('message', 'Hello World');

  socket.on('disconnect', () => {
    console.log('socket disconnected');
  });
});

io.listen(5000);
