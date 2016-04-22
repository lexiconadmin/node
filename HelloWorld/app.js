var http = require('http');
var io = require('socket.io')(http);
// Comment
var port = (process.env.PORT || process.env.VCAP_APP_PORT || 8888);

http.createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('Hello Lenin!\n');
}).listen(port);

console.log('Server running at http://127.0.0.1:'+port);