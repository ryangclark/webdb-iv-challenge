exports.seed = function(knex) {
  return knex('recipes_ingredients').insert([
    { recipe_id: 1, ingredient_id: 3, quantity: 2 },
    { recipe_id: 1, ingredient_id: 2, quantity: 1 },
    { recipe_id: 2, ingredient_id: 3, quantity: 1 },
    { recipe_id: 2, ingredient_id: 2, quantity: 1 },
    { recipe_id: 3, ingredient_id: 2, quantity: 1 },
    { recipe_id: 3, ingredient_id: 3, quantity: 2 },
    { recipe_id: 3, ingredient_id: 4, quantity: 2 },
    { recipe_id: 4, ingredient_id: 1, quantity: 2 },
    { recipe_id: 4, ingredient_id: 3, quantity: 3 },
    { recipe_id: 4, ingredient_id: 5, quantity: 2 },
    { recipe_id: 4, ingredient_id: 2, quantity: 1 },
    { recipe_id: 5, ingredient_id: 2, quantity: 1 },
    { recipe_id: 5, ingredient_id: 3, quantity: 2 },
    { recipe_id: 5, ingredient_id: 5, quantity: 1 },
  ]);
};
