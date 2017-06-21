const FeedParser = require('feedparser');
const request = require('request');

module.exports.fetchData = feedurl => {
	return new Promise(function(resolve, reject) {
		let episodes = [];

		const req = request(feedurl);
		const parser = new FeedParser();

		// Handle request error
		req.on('error', err => {
			reject(err);
		});

		// If result is correct, pipe response to feedparser
		req.on('response', () => {
			req.pipe(parser);
		});

		// Handle parser error
		parser.on('error', err => {
			reject(err);
		});

		// Parse feed into episodes
		parser.on('readable', () => {
			let episode = parser.read();
			while (episode) {
				episodes.push(episode);
				episode = parser.read();
			}
		});

		// Resolve promise when rss feed is done parsing
		parser.on('end', () => {
			resolve(episodes);
		});
	});
};
