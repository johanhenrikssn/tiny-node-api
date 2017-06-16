const express = require('express');
const router = express.Router({ mergeParams: true });
const rss = require('../services/rss')();

router.get('/episodes', (req, res) => {
	const { feedurl } = req.query;
	const decodedUrl = decodeURIComponent(feedurl);

	rss
		.fetchData(decodedUrl)
		.then(episodes => {
			res.status(200).send(episodes);
		})
		.catch(err => {
			res.status(err.status).send(err.desc);
		});
});

module.exports = router;
