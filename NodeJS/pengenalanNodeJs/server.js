const http = require ('http');


const server = http.createServer( function (req, res){
    res.end('Hi Selamat anda berhasil membuat server dengan node js');
})

server.listen(8000);

console.log('server running at port 8000');