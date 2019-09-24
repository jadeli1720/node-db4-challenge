
exports.seed = function(knex) {
  return knex('instructions').insert([
    {instructions:"Chop and dice all vegetables", recipe_id:"1"},
    {instructions:"Mix together all ingredients", recipe_id:"1"},
    {instructions:"Let sit for at least for 30mis. Best results are over night", recipe_id:"1"}
  ]);
};
