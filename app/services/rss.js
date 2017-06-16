const FeedParser = require('feedparser');
const request = require('request');
const Promise = require('bluebird');

module.exports = () => {
	return {
		fetchData: function(feedurl) {
			return new Promise(function(resolve, reject) {
				var episodes = [];

				const req = request(feedurl);
				const parser = new FeedParser();

				// If result is correct, pipe response to feedparser
				req.on('response', res => {
					req.pipe(parser);
				});

				// Resolve promise when rss feed is done parsing
				parser.on('end', () => {
					resolve(episodes);
				});

				// Parse feed into episodes
				parser.on('readable', () => {
					let episode = parser.read();
					const meta = parser.meta;
					while (episode) {
						episodes.push(episode.title);
						episode = parser.read();
					}
				});
			});
		}
	};
};
