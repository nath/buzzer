var app = require('express')();
var server = require('http').Server(app);
var io = require('socket.io')(server);

server.listen(8080);

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
    console.log('Connected');
    socket.on('buzz', function(data) {
        console.log('Winner ' + data.name);
        io.sockets.emit('winner', { name: data.name});
    });
});
