exports.seed = function (knex, Promise) {
  return knex('cows').insert([
    { id: 'ec7c113d-a25d-45cc-9d60-604329e21d9b', collarId: 261, cowNumber: 88261, collarStatus: 'Healthy' },
    { id: 'fe0a1ec1-e7d4-4b2d-a555-ae23926ee9d0', collarId: 222, cowNumber: 88222, collarStatus: 'Broken' }
  ])
}
