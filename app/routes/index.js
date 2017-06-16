var express = require('express');
var router = express.Router({ mergeParams: true });

router.get('/episodes', (req, res) => {
	res.send('slash episodes');
});

module.exports = router;
