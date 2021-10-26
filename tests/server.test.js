const request = require('supertest')
const cheerio = require('cheerio')

jest.mock('../db', () => ({
  getCows: () => Promise.resolve([
    { id: "fe0a1ec1-e7d4-4b2d-d555-ae23926ee9d0", collarId: 221, cowNumber: 88269, collarStatus: "Healthy"  },
    { id: "fe0a1ec1-esd4-4b2d-a555-ae23926ee9d0", collarId: 211, cowNumber: 88323, collarStatus: "Healthy" }
  ])
}))

const server = require('../server')

test('GET /', () => {
  return request(server)
    .get('/')
    .expect(200)
    .then((res) => {
      // has to be changed to fit new database promise
      const $ = cheerio.load(res.text)
      const firstLiText = $('li').first().text()
      expect(firstLiText).toBe('test user 2 (test2@user.nz)')
    })
    .catch(err => expect(err).toBeNull())
})
