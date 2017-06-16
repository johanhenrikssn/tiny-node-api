var express = require('express');
var router = express.Router({ mergeParams: true });

router.get('/episodes', (req, res) => {
  const { feedurl } = req.query;
  const decodedUrl = decodeURIComponent(feedurl);

	res.send(`fetch episodes from ${decodedUrl}`);
});

module.exports = router;
