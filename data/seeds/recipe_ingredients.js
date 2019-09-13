
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').insert([
    {recipe_id:1, ingredients_id:1, quantity:2, measurements:"" },
    {recipe_id:1, ingredients_id:2, quantity:3, measurements:"" },
    {recipe_id:1, ingredients_id:3, quantity:.25, measurements:"" },
    {recipe_id:1, ingredients_id:4, quantity:.50, measurements:"" },
    {recipe_id:1, ingredients_id:5, quantity:1, measurements:"" },
    {recipe_id:1, ingredients_id:6, quantity:1, measurements:"" },
    {recipe_id:1, ingredients_id:7, quantity:1, measurements:"tbsp" },
    {recipe_id:1, ingredients_id:8, quantity:.25, measurements:"cup" },
    {recipe_id:1, ingredients_id:9, quantity:1, measurements:"to taste" },
    {recipe_id:1, ingredients_id:10, quantity:1, measurements:"to taste" },
  ])

};;
