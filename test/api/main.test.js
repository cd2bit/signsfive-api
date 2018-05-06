import supertest from 'supertest'
import server from '../../src/index'

describe('Main API routes', () => {
  let api
  let path

  beforeEach(() => {
    api = supertest(server)
  })

  describe('GET /', () => {
    // this beforeEach is needed as SuperAgent doesn't like .end() called more than once
    beforeEach(() => {
      path = api.get('/')
    })

    xit('responds with available routes', () => {
      // TODO: figure out how to deal with SuperAgent
    })

    it('responds with json', () => {
      return path.expect('Content-Type', /json/)
    })
  })

  describe('GET /name', () => {
    // this beforeEach is needed as SuperAgent doesn't like .end() called more than once
    beforeEach(() => {
      path = api.get('/name')
    })

    it('responds with package name', () => {
      return path.expect(200, {
        name: process.env.npm_package_name
      })
    })

    it('responds with json', () => {
      return path.expect('Content-Type', /json/)
    })
  })

  describe('GET /version', () => {
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
