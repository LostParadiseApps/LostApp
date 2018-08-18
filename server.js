var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/html/index.html');
});

http.listen(1337, function(){console.log('Прослушка *:1337');});
io.on('connection', function(socket){console.log('a user connected');});
