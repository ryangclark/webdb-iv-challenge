exports.seed = function(knex) {
  return knex('instructions').insert([
    {
      recipe_id: 1,
      content:
        "Find a sizeable spoon. Take it to the PB jar. Scoop at it like it's ice cream."
    },
    {
      recipe_id: 2,
      content:
        'Find yourself a spoon. Daintily remove the lid of the PB jar. Slowly, decadently scrape a small serving of PB. Flip the spoon up and eat like the ladies in the yoghurt commercials.'
    },
    {
      recipe_id: 3,
      content: "Wait 'till your partner is distracted. Sneakily pull out the PB and the honey. Don't let your partner see you indulging."
    },
    {
      recipe_id: 4,
      content:
        "Grab two slices bread. Apply PB to both slices. Apply jam to one slice of your choosing. Place PB-only slice onto the other, keeping the goodness inside, of course."
    },
    {
      recipe_id: 5,
      content:
        "Grab one slice bread. Apply PB. Apply jam. Fold bread onto itself."
    }
  ]);
};
