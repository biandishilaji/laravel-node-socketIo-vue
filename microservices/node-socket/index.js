let app = require('express')();
let http = require('http').Server(app);
let io = require('socket.io')(http);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
});


http.listen(6001, () => {
    console.log('Listening on port *: 6001');
});

io.on('connection', (socket) => {

    console.log(`A user connected ${socket.id}`)

    socket.emit('connections', Object.keys(io.sockets.connected).length);

    socket.on('disconnect', () => {
        console.log(`A user disconnected ${socket.id}`);
    });

    socket.on('test', () => {
        io.emit('test1', 'test')
    });

});
