# tiny-node-api
A tiny API that takes a RSS feed, parses it and returns a list of episodes from that feed.

## Run
1. `yarn` or `npm install` to install dependencies.
3. `yarn dev` or `npm dev` to run the app in development.

# API
## Endpoint
The backend has one endpoint that takes a query parameter `feedurl` with a url `<FEED_URL>` of a RSS feed with episodes:

* `GET /episodes?feedurl=<FEED_URL>`

## Parsing
The RSS feed is parsed with the parsing module [node-feedparser](https://github.com/danmactough/node-feedparser).

## Error handling
Request errors and errors from the parsing module are send back to the client together with corresponding http status code and error message.

# Tooling
## Tests
Tests supports code coverage using [istanbul](https://github.com/gotwarlost/istanbul) and [mocha](https://github.com/mochajs/mocha). Run tests with `yarn test`. Run `yarn test:coverage` to get test results along with code coverage. A code coverage report is generated in the directory `coverage/`.

## Linting
Code linting is done using ESLint and with a set of common rules. Run `yarn lint` to lint code.

# Possible improvements
* Endpoint to add a new feed and a separate for fetching episodes, with caching/database storage.
* Endpoint to specify how many episodes should be returned.
* Pagination of episodes.
