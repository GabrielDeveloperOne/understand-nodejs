const http = require('http');
const url = require('url');


const server = http.createServer((req, resp) => {
    resp.writeHead(200, {
        "Content-type": "text/html"
    });
    resp.write("<h1>Dados da query string</h1>");
    const result = url.parse(req.url);

    for (var key in result.query) {
        response.write("<h2>" + key + " : " + result.query[key] + "</h2>");
    }
    resp.end();
})

server.listen(3000, () => console.log("Servidor http"));