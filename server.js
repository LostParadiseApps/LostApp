const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);


app.get('/', function(req, res){

  res.sendFile(__dirname + '/public/html/index.html');
});

http.listen(80, function(){console.log('Прослушка *:1337');});
io.on('connection', function(socket){console.log('a user connected');});
