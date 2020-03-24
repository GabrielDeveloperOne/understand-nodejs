const http = require('http');
const fs = require('fs');

const server = http.createServer((req, resp) => {
   fs.readFile(__dirname + '/index.html', function(err, html){
    resp.writeHeader(200, {'Content-Type': 'text/html'});
    resp.write(html);
    resp.end();
   });
});
server.listen(3000, () => console.log('Executando Site Pessoal'));