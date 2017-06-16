const FeedParser = require('feedparser');
const request = require('request');
const Promise = require('bluebird');

module.exports = () => {
	return {
		fetchData: function(feedurl) {
			return new Promise(function(resolve, reject) {
				let episodes = [];

				const req = request(feedurl);
				const parser = new FeedParser();

				// Handle request error
				req.on('error', err => {
					reject(err);
				});

				// If result is correct, pipe response to feedparser
				req.on('response', res => {
					req.pipe(parser);
				});

				// Handle parser error
				parser.on('error', err => {
					reject(err);
				});

				// Parse feed into episodes
				parser.on('readable', () => {
					let episode = parser.read();
					const meta = parser.meta;
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
		}
	};
};
