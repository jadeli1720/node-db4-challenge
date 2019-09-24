## Requirements:

- have a way to manage recipes.
- have a way to manage ingredients.
- a **recipe** could have more than one **ingredient** and the same **ingredient** can be used in multiple recipes. Examples are _"cup of corn flour"_ or _"gram of butter"_.
- when saving the ingredients for a **recipe** capture the quantity required for that **ingredient** as a floating number.
- have a way to save step by step instructions for preparing a recipe.

## Components 

- Entities: --> (recipes, ingredients) --> resource = tables = 2 so far
- Properties: --> 
    - Recipe O ------------ M Ingredients
        
    - Ingredient O/M ----------- M Recipes

    "cup of corn flour" or "gram of butter".

- Relationships: recipe.id <----->recipe_ingredients<------>ingredients