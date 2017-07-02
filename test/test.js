var expect = require('chai').expect;
var supertest = require('supertest-as-promised');
var server = require('../index').server;
var utils = require('../utils');

var expectJSON = function(app, path){
  return function(){
    return app.get(path).expect('Content-Type', /json/);
  };
};

describe('Something', function(){
  it('should do something', function(){
    return expect({a:1}).to.not.have.property('b');
  });
});

describe('API routes', function(){
  var api = supertest(server);

  describe('GET /version', function(){
    // this beforeEach is needed as SuperAgent doesn't like .end() called more than once
    var path;
    beforeEach(function(){path = api.get('/version');});

    it('responds with package version', function(){
      return path.expect(200, {version: process.env.npm_package_version});
    });

    it('responds with json', function(){
      return path.expect('Content-Type', /json/);
    });
  });
});
