exports.seed = function (knex, Promise) {
  return knex('cows').insert([
    { id: "fe0a1ec1-e7d4-4b2d-d555-ae23926ee9d0", collarId: 221, cowNumber: 88269, collarStatus: "Healthy"  },
    { id: "fe0a1ec1-esd4-4b2d-a555-ae23926ee9d0", collarId: 211, cowNumber: 88323, collarStatus: "Healthy" }
  ])
}
