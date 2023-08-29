const express = require('express');
const http = require('http');
const db = require('./config/mongoose');

const app = express();
const port = 8000;

// Setup sockets.io
const httpServer = http.createServer(app);
const io = require('./config/socket').socketsIo(httpServer);
httpServer.listen(3000);
console.log('sockets is listening.');

// Static files middleware
app.use(express.static('./assets'));

// Setting up EJS
app.set('view engine', 'ejs');
app.set('views', './views');

app.listen(port, (err) => {
  if (err) {
    console.log('Error in running the server');
    return;
  }

  console.log(`Server running on the PORT: ${port}`);
});
