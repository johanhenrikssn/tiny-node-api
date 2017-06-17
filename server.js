const express = require('express');
const app = express();

const routes = require('./app/routes/');
app.use('/', routes);

const server = app.listen(process.env.PORT || 3000, () => {
	console.log(`Listening on port ${server.address().port}`);
});

module.exports = server;
