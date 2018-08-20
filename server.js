const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);



app.get('/', function(req, res){
  res.sendFile(__dirname + '/public/html/index.html');
});

app.get('/client.js', function(req, res){
    res.sendFile(__dirname + '/public/Js/client.js');

});
app.get('/pixi.js', function(req, res){
    res.sendFile(__dirname + '/public/Js/pixi.js');

});
app.get('/style.css', function(req, res){
    res.sendFile(__dirname + '/public/css/style.css');
});




http.listen(80, function(){console.log('Прослушка *:80');});
io.on('connection', function(socket){console.log('a user connected');});
