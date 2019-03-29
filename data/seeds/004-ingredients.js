exports.seed = function(knex) {
  return knex('ingredients').insert([
    { name: 'slice of bread' },
    { name: 'spoon' },
    { name: 'spoonful of peanut butter' },
    { name: 'spoonful of honey' },
    { name: 'spoonful of jam' },
  ]);
};
