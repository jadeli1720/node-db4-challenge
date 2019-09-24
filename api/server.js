const express = require('express');
const helmet = require('helmet');

//route to either recipes or ingredients
//const recipeRouter = require('./recipe-router)

const server = express();

server.use(helmet());
server.use(express.json());

//Check to make sure these routes are correct
//server.use('/api/name of folder or file',recipeRouter )


module.exports = server;