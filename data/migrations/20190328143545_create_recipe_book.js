exports.up = function(knex, Promise) {
  return knex.schema
    .createTable('dishes', table => {
      table.increments();
      table
        .string('name', 128)
        .notNullable()
        .unique();
    })
    .createTable('recipes', table => {
      table.increments();
      table.string('name', 128).notNullable();
      table
        .integer('dish_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('dishes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
    })
    .createTable('instructions', table => {
      table.increments();
      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table.text('content').notNullable();
    })
    .createTable('ingredients', table => {
      table.increments();
      table
        .string('name', 128)
        .notNullable()
        .unique();
    })
    .createTable('recipes_incredients', table => {
      table.increments();
      table
        .integer('recipe_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('recipes')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('ingredient_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('ingredients')
        .onDelete('CASCADE')
        .onUpdate('CASCADE');
      table
        .integer('quantity')
        .unsigned()
        .notNullable();
    });
};

exports.down = function(knex, Promise) {};
