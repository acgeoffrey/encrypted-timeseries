module.exports.socketsIo = function (server) {
  let io = require('socket.io')(server);

  io.sockets.on('connection', function (socket) {
    console.log('New Connection Received', socket.id);
  });
};
