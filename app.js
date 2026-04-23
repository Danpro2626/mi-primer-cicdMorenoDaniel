function sumar(a, b) {
  return a + b;
}

const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola DevOps! El resultado de 2+3 es: ' + sumar(2, 3));
});

server.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

module.exports = { sumar };