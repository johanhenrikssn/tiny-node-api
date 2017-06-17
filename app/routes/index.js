const express = require('express');
const HTTPStatus = require('http-status');
const router = express.Router({ mergeParams: true });
const rss = require('../services/rss')();

router.get('/episodes', (req, res) => {
	const { feedurl } = req.query;

	if (!feedurl)
		return res
			.status(HTTPStatus.UNPROCESSABLE_ENTITY)
			.send('Missing query parameter feedurl');

	rss
		.fetchData(feedurl)
		.then(episodes => {
			res.status(HTTPStatus.OK).send(episodes);
		})
		.catch(err => {
			res.status(HTTPStatus.INTERNAL_SERVER_ERROR).send(err.message);
		});
});

module.exports = router;
