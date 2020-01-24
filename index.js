var app = require('express')();
var http = require('http').createServer(app);
var io = require('socket.io')(http);
// var io = require('socket.io')({
//   path: '/app/socket.io'
// });

//users = [];

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});


// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });

var clients = 0;

io.on('connection', function(socket){
  console.log('a user connected');
  console.log(clients);
  
  
  //clients++;
  
  // io.sockets.emit('test',{message:clients+" clients connected"});
  
  // socket.on('disconnect', function(){
  //   //clients--;
  //   console.log('user disconnected');
  // });
  
  socket.on('chat', function(msg){
      console.log(msg);
    io.emit('chat', msg);
  });
  
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});




http.listen(3000, function(){
  console.log('listening on *:3000');
});