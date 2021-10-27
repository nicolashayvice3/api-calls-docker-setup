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

export function updateCow (id, updatedCow) {
  return request
    .patch(rootUrl + `/${id}`)
    .send(updatedCow)
    .then(res => {
      return res.body
    })
    .catch(e => console.log(e))
}
