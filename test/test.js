var expect = require('chai').expect;
var supertest = require('supertest');
var server = require('../src/index').server;
var utils = require('../src/utils');

var expectJSON = (app, path) => {
  return () => {
    return app.get(path).expect('Content-Type', /json/)
  }
}

describe('Something', () =>{
  it('should do something', () => {
    return expect({a:1}).to.not.have.property('b')
  })
})

describe('API routes', () => {
  let api

  beforeEach(() => {
    api = supertest(server)
  })

  describe('GET /version', () => {
    let path;

    // this beforeEach is needed as SuperAgent doesn't like .end() called more than once
    beforeEach(() => {
      path = api.get('/version')
    })

    it('responds with package version', () => {
      return path.expect(200, {
        version: process.env.npm_package_version
      })
    })

    it('responds with json', () => {
      return path.expect('Content-Type', /json/)
    })
  })
})
