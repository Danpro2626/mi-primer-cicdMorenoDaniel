function sumar(a, b) {
  return a + b;
}

const http = require('http');
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hola Arquitectos! Soy Daniel Moreno y esto es CI/CD real!');
});

server.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));

module.exports = { sumar };