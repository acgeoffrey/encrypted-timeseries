class MessageSocket {
  constructor(message) {
    this.message = message;

    //Initiate connection
    this.socket = io.connect('http://localhost:3000');

    if (this.message) {
      this.connectionHandler();
    }
  }

  connectionHandler() {
    this.socket.on('connect', function () {
      console.log('connection established using sockets');
    });
  }
}
