var chai = require('chai');
var assert = chai.assert;
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var server = require('../server');
var Browser = require('zombie');

suite('Functional Tests', function () {
  this.timeout(5000);

  // ---------------------------
  // Integration tests with chai-http
  // ---------------------------
  suite('Integration tests with chai-http', function () {

    test('GET /hello with no name', function (done) {
      chai.request(server)
        .get('/hello')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, 'hello Guest');
          done();
        });
    });

    test('GET /hello with your name', function (done) {
      chai.request(server)
        .get('/hello?name=xy_z')
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.text, 'hello xy_z');
          done();
        });
    });

    test('Send {surname: "Colombo"}', function (done) {
      chai.request(server)
        .put('/travellers')
        .send({ surname: 'Colombo' })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.name, 'Cristoforo');
          assert.equal(res.body.surname, 'Colombo');
          done();
        });
    });

    test('Send {surname: "da Verrazzano"}', function (done) {
      chai.request(server)
        .put('/travellers')
        .send({ surname: 'da Verrazzano' })
        .end(function (err, res) {
          assert.equal(res.status, 200);
          assert.equal(res.body.name, 'Giovanni');
          assert.equal(res.body.surname, 'da Verrazzano');
          done();
        });
    });

  });

  // ---------------------------
  // Zombie.js Headless Browser
  // ---------------------------
  suite('Functional Tests with Zombie.js', function () {
    var browser = new Browser();

    suite('Headless browser', function () {
      test('should have a working "site" property', function (done) {
        browser.visit('http://localhost:3000', function () {
          assert.isNotNull(browser.site);
          done();
        });
      });
    });

    suite('"Famous Italian Explorers" form', function () {

      test('Submit the surname "Colombo" in the HTML form', function (done) {
        browser.visit('http://localhost:3000', function () {
          browser.fill('surname', 'Colombo').pressButton('submit', function () {
            assert.equal(browser.text('#surname'), 'Colombo');
            assert.equal(browser.text('#name'), 'Cristoforo');
            done();
          });
        });
      });

      test('Submit the surname "Vespucci" in the HTML form', function (done) {
        browser.visit('http://localhost:3000', function () {
          browser.fill('surname', 'Vespucci').pressButton('submit', function () {
            assert.equal(browser.text('#surname'), 'Vespucci');
            assert.equal(browser.text('#name'), 'Amerigo');
            done();
          });
        });
      });

    });
  });

});
