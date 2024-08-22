const request = require('request');
const { expect } = require('chai');
const server = require('./api'); // Import the server

describe('Index page', () => {
  let serverInstance;

  before((done) => {
    serverInstance = server.listen(7865, done); // Start server before running tests
  });

  after((done) => {
    serverInstance.close(done); // Stop server after tests are done
  });

  it('should return a 200 status code', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      if (err) return done(err);
      expect(res.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct response body', (done) => {
    request.get('http://localhost:7865', (err, res, body) => {
      if (err) return done(err);
      expect(body).to.equal('Welcome to the payment system');
      done();
    });
  });
});
