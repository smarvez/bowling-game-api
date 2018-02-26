
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, name: 'Steph'},
        {id: 2, name: 'Melissa'},
        {id: 3, name: 'Nigel'}
      ]);
    });
};
