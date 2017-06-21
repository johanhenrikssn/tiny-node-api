var server = require('../../server');

describe('server tests', () => {
	it('it should launch', done => {
		server
			.listen(3000)
			.on('error', err => done(err))
			.on('listening', () => done());
	});

	it('it should close', done => {
		server.close(err => done(err));
	});
});
