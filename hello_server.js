const http = require('http');

const atendeRequisicao = (request, response) => {
    response.writeHead(200, {"Content-type": "text/html"});
    response.wirte("<h1>Hello world</h1>");
    response.end();
}

const server = http.createServer(atendeRequisicao);

const servidorLigou = () => {
    console.log('Servidor ligou');
}

server.listen(3000, servidorLigou);