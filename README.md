# node assignment
A tiny API that takes a RSS feed, parses it and returns a list of episodes from that feed.

## Run
1. `yarn` or `npm install` to install dependencies.
3. `yarn dev` or `npm dev` to run the app in development.

# API
## Endpoint
The backend has one endpoint that takes a query parameter `feedurl` with a url `<FEED_URL>` of a RSS feed:

* `GET /episodes?feedurl=<FEED_URL>`

`<FEED_URL>` is an url encoded query string and in JavaScript this conversation can be done with `encodeURIComponent()`.

## Parsing
The RSS feed is parsed with the parsing module [node-feedparser](https://github.com/danmactough/node-feedparser).

## Error handling
Errors by the parsing module are send back to the client together with a corresponding http status code.

# Possible improvements
* Endpoint to add a new feed and a separate for fetching episodes, with caching/database storage.
* Endpoint to specify how many episodes should be returned.
* Pagination of episodes.
