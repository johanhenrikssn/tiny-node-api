var server = require('../../server');

describe('server', function() {
	it('it should launch', done => {
		before(function() {
			server.listen(3000);
		});
		done();
	});

	it('it should close', done => {
		after(function() {
			server.close();
		});
		done();
	});
});
