const http = require('http');
const app = require('./app');
require('./model');

const PORT = process.env.PORT ?? 5000;

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log(`Server is listening port ${PORT}`);
});
