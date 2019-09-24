
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('recipes').insert([
    {recipe_name:"Mango Salsa"},
    {recipe_name: "Strawberry Sauce Topping"}
  ])
    
};

