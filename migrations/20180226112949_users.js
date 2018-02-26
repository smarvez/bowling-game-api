
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('name').notNullable()
    table.integer('high_score').notNullable().defaultsTo(0)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
