//Install express server
const express = require('express');
const path = require('path');
const jsonServer = require('json-server');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/fitness-app'));

app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname + '/dist/fitness-app/index.html'));
});

app.use('/sensors', jsonServer.router('db.json'));
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
