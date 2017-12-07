let socket = io.connect(socket_url)
socket.on('address', (data) => {
    console.log('socket address',data)
})


socket.on('connect', function() {
    console.log("与服务器连接");
});

socket.on('disconnect', function() {
    console.log("与服务器断开");
});


socket.on('reconnect', function() {
    console.log("重新连接到服务器");
});

window.socket = socket

