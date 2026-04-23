function sumar(a, b) {
  return a + b;
}

if (require.main === module) {
  const http = require('http');
  const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hola DevOps! El resultado de 2+3 es: ' + sumar(2, 3));
  });
  server.listen(3000);
}

module.exports = { sumar };