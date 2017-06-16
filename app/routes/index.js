const express = require('express');
const router = express.Router({ mergeParams: true });
const rss = require('../services/rss')();

router.get('/episodes', (req, res) => {
	const { feedurl } = req.query;

	rss
		.fetchData(feedurl)
		.then(episodes => {
			res.status(200).send(episodes);
		})
		.catch(err => {
			res.status(500).send(err.message);
		});
});

module.exports = router;
