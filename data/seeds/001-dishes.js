exports.seed = function(knex) {
  return knex('dishes').insert([
    { name: 'Peanut Butter on a Spoon' },
    { name: 'Peanut Butter with Honey' },
    { name: 'Peanut Butter and Jam' },
  ]);
};
