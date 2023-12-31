const http = require("http");
const dotenv = require("dotenv");

dotenv.config();
console.log(process.env);

const app = require("./app");

const port = process.env.PORT || 3000;

const server = http.createServer(app);
server.listen(port);
