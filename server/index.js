const express = require('express');
const app = express();
const http = require('http').Server(app);
const socketIo = require('socket.io')(http);
const port = 8080;
const MESSAGE = 'message';

socketIo.on('connection', (socket) => {
  console.log('new connection');

  socket.on('disconnect', () => console.log('bye...'));
  socket.on(MESSAGE, (message) => {
    socketIo.emit({
      type: MESSAGE,
      text: message,
    });
  });
});

http.listen(port, () => {
  console.log(`socket-server listening port ${port}`)
});
