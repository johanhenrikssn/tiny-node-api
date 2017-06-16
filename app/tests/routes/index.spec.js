let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../../server');
let should = chai.should();

chai.use(chaiHttp);

describe('GET /episodes', () => {

	it('it should GET without any parameter and error', done => {
    chai.request(server).get('/episodes').end((err, res) => {
			res.should.have.status(500);
			res.body.should.be.a('object');
			done();
		});
	});

  it('it should GET johndoe and error', done => {
    chai.request(server).get('/episodes?feedurl=johndoe').end((err, res) => {
      res.should.have.status(500);
      res.body.should.be.a('object');
      done();
    });
  });

  it('it should GET google.com and error', done => {
    chai.request(server).get('/episodes?feedurl=http://google.com').end((err, res) => {
      res.should.have.status(500);
      res.body.should.be.a('object');
      done();
    });
  });

  it('it should GET all episodes with normal URL', done => {
    chai.request(server).get('/episodes?feedurl=http://alexosigge.libsyn.com/rss').end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('array');
			done();
		});
	});

  it('it should GET all episodes with encoded URL', done => {
    chai.request(server).get('/episodes?feedurl=http%3A%2F%2Falexosigge.libsyn.com%2Frss').end((err, res) => {
			res.should.have.status(200);
			res.body.should.be.a('array');
			done();
		});
	});
});
