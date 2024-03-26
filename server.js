const http = require('http'); const HOST = 'http://localhost/' ; const PORT = 3000
const server = http.createServer((request, response) => { response.statusCode = 200; response.end("Hello, Galvanize!");});
server.listen(PORT, "localhost", () => console.log(`Server running at ${HOST}:${PORT}/`));