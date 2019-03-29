exports.seed = function(knex) {
  return knex('recipes').insert([
    { name: 'Big Spoon of Peanut Butter', dish_id: 1 },
    { name: 'Small Spoon of Peanut Butter', dish_id: 1 },
    { name: 'Sneaky Peanut Butter and Honey', dish_id: 2 },
    { name: 'The Classic: Peanut Butter and Jam', dish_id: 3 },
    { name: 'Quick \'n\' Easy Peanut Butter and Jam', dish_id: 3 },
  ]);
};
