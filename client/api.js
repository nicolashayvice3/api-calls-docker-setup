import request from 'superagent'

const rootUrl = '/api/v1/cows'

export function getCows () {
  return request
    .get(rootUrl)
    .then(res => {
      return res.body
    })
    .catch(e => console.log(e))
}

export function sendCow (newCow) {
  return request
    .post(rootUrl)
    .send(newCow)
    .then(res => {
      return null
    })
    .catch(e => console.log(e))
}

export function updateCow (updatedCow) {
  return request
    .patch(rootUrl)
    .send(updatedCow)
    .then(res => {
      return res.body
    })
    .catch(e => console.log(e))
}
