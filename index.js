const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const server = express(); //libreria
const port = 3000; //puerto de escucha

server.use(cors());
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

server.use('/', routes.mainRoutes);

server.listen(port, function() {
    console.log(`server listening on port ${port}`);
});
