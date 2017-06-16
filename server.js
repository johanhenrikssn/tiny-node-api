var express = require('express');
var app = express();

var routes = require('./app/routes/');
app.use('/', routes);

var server = app.listen( process.env.PORT || 3000, () => {
  console.log('Listening on port ' + server.address().port);
});
