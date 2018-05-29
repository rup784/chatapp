const express = require('express');
  // var app = require('express')();
  const app = express()
  var http = require('http').Server(app);
  var io = require('socket.io')(http);
  

const port = process.env.PORT || 3000;

app.use(express.static('public'));

  app.get('/', function (req, res) {
    // process.chdir("../");
    // res.sendfile(process.cwd() + '/chat.html');
    res.sendfile('chat.html');
  });

  io.on('connection', function (socket) {
    console.log('user connected');
    socket.on('chat message', function (msg) {
      io.emit('chat message', msg);
    });
    socket.on('disconnect', function () {
      console.log('user disconnected');
    });
  });
  
http.listen(port, function () {
  console.log('listening on *:'+ port);
  });