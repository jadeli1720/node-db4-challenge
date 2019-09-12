
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {ingredients_name:"mangos"},
    {ingredients_name:"roma tomatoes"},
    {ingredients_name:"red onion"},
    {ingredients_name:"red bell pepper"},
    {ingredients_name:"jalapeno pepper"},
    {ingredients_name:"Juice of Lime"},
    {ingredients_name:"apple cider vinegar"},
    {ingredients_name:"cilantro"},
    {ingredients_name:"salt"},
    {ingredients_name:"pepper"},
  ])
    
};
