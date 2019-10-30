const jsonServer = require('json-server');
const express = require('express');
const app = express();
const db = require('./db');

app.use(express.static(__dirname + '/dist/fitness-app'));
app.use(jsonServer.router(db));
app.listen(process.env.PORT || 3000);
