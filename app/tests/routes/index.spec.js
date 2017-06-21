let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../../server');
let expect = chai.expect;

chai.use(chaiHttp);

describe('GET /episodes', () => {
	it('it should GET without any parameter and error', done => {
		chai.request(server).get('/episodes').end((err, res) => {
			expect(res).to.have.status(422);
			expect(res.text).to.be.equal('Missing query parameter feedurl');
			done();
		});
	});

	it('it should GET johndoe and error', done => {
		chai.request(server).get('/episodes?feedurl=johndoe').end((err, res) => {
			expect(res).to.have.status(500);
			expect(res.text).to.be.equal('Invalid URI "johndoe"');
			done();
		});
	});

	it('it should GET google.com and error', done => {
		chai
			.request(server)
			.get('/episodes?feedurl=http://google.com')
			.end((err, res) => {
				expect(res).to.have.status(500);
				expect(res.text).to.be.equal('Not a feed');
				done();
			});
	});

	it('it should GET all episodes with normal URL', done => {
		chai
			.request(server)
			.get('/episodes?feedurl=http://alexosigge.libsyn.com/rss')
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body).to.be.a('array');
				expect(res.body.length).to.be.above(100);
				done();
			});
	});

	it('it should GET all episodes with encoded URL', done => {
		chai
			.request(server)
			.get('/episodes?feedurl=http%3A%2F%2Falexosigge.libsyn.com%2Frss')
			.end((err, res) => {
				expect(res).to.have.status(200);
				expect(res.body).to.be.a('array');
				expect(res.body.length).to.be.above(100);
				done();
			});
	});
});
