const db = require('./dbConfig');

module.exports = {
  addDish,
  getDish,
  getDishes,
  addRecipe,
  getRecipes
};

// Returns a list of all dishes in the database
function getDishes() {
  return db('dishes');
}

// Adds the dish to the database and return the `id` of the new dish.
function addDish(dish) {
  return db('dishes').insert(dish);
}

// Returns the dish for the provided `id`,
// and includes a list of the related recipes.
function getDish(id) {
  return db('dishes')
    .select()
    .where('id', id)
    .then(dish => ({
      ...dish,
      recipes: db('recipes')
        .select('name')
        .where('dish_id', id)
        .first()
    }));
}

// Returns a list of all recipes in the database,
// including the dish they belong to.
function getRecipes() {
  return db('recipes')
    .join('dishes', 'recipes.dish_id', '=', 'dishes.id')
    .select({ id: 'recipes.id', name: 'recipes.name', dish: 'dishes.name' });
}

// Adds a recipe to the database,
// and returns the id of the new recipe.
function addRecipe(recipe) {
  return db('recipes').insert(recipe);
}
