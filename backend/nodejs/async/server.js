var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
    var info;
    if (req.url === '/') {
        info = fs.readFile('index.html', function (err, info) {
            if (err) {
                console.error(err);
                res.statusCode = 500;
                res.end('Server error');
                return;
            }
            res.end(info);
        });
    }else if (req.url === '/now') {
        res.end(new Date.now().toString());
    }
}).listen(3000);