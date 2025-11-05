var Browser = require('zombie');
var assert = require('chai').assert;

var browser = new Browser();

suite('Functional Tests with Zombie.js', function() {

  var server;

  suiteSetup(function(done) {
    // Start server
    server = require('../server').listen(3000, function() {
      browser.site = 'http://127.0.0.1:3000';
      done();
    });
  });

  suiteTeardown(function(done) {
    // Stop server after tests
    server.close(done);
  });

  test('should have a working "site" property', function() {
    assert.ok(browser.site);
  });

  suite('"Famous Italian Explorers" form', function() {

    test('Submit the surname "Colombo" in the HTML form', function(done) {
      browser.visit('/', function(err) {
        if (err) return done(err);

        browser.fill('surname', 'Colombo');
        browser.pressButton('submit', function(err) {
          if (err) return done(err);

          var text = browser.text('span#name');
          assert.equal(text, 'Cristoforo');
          done();
        });
      });
    });

    test('Submit the surname "Vespucci" in the HTML form', function(done) {
      browser.visit('/', function(err) {
        if (err) return done(err);

        browser.fill('surname', 'Vespucci');
        browser.pressButton('submit', function(err) {
          if (err) return done(err);

          var text = browser.text('span#name');
          assert.equal(text, 'Amerigo');
          done();
        });
      });
    });

  });

});
