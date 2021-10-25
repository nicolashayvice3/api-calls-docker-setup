exports.up = (knex, Promise) => {
    return knex.schema.createTable('cows', (table) => {
      table.increments('id').primary()
      table.int('collarId')
      table.int('cowNumber')
      table.string('collarStatus')
    })
  }
  
  exports.down = (knex, Promise) => {
    return knex.schema.dropTable('cows')
  }
