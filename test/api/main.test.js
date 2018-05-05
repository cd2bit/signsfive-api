import { expect } from 'chai'
import supertest from 'supertest'
import server from '../../src/index'

describe('Main API routes', () => {
  let api

  beforeEach(() => {
    api = supertest(server)
  })

  describe('GET /version', () => {
    let path

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
