
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', table => {
    table.increments()
    table.foreign('games_users_id_foreign').references('users_id')
    table.integer('score').notNullable().defaultsTo(0)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('games')
};
