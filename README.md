# REST API using Express
Following libraries are used in this project:
1. [express](https://github.com/expressjs/express) - Fast, unopinionated, minimalist web framework for Node.js
1. [morgan](https://github.com/expressjs/morgan) - HTTP request logger middleware for node.js
1. [multer](https://www.npmjs.com/package/multer) - Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files
1. [body-parser](https://github.com/expressjs/body-parser) - Parse incoming request bodies in a middleware
1. [mongoose](https://github.com/Automattic/mongoose) - MongoDB object modeling tool designed to work in an asynchronous environment
1. [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken) - An implementation of JSON Web Tokens
1. [bcrypt](https://github.com/kelektiv/node.bcrypt.js) - A library to help you hash passwords
1. [nodemon](https://github.com/remy/nodemon) - nodemon is a tool that helps develop Node.js based applications by automatically restarting the node application when file changes in the directory are detected

### Local environment setup
1. Follow this [video](https://www.youtube.com/watch?v=WDrU305J1yw&list=PL55RiY5tL51q4D-B63KBnygU6opNPFk_q&index=6&ab_channel=Academind) to create Mongo DB cluster in Atlas, save the connection url
1. Create `.env` file in the root folder with following:
```
PORT=3000
MONGO_ATLAS_URL=
JWT_KEY=secret

```
1. Use any editor/command line tool and run `npm install` from root directory to download all dependencies
1. Start the application using `npm start` comand
1. Access application using this [Postman Collection](./postman/Node%20REST%20API.postman_collection.json)
