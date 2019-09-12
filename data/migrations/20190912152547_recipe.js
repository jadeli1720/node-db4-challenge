
exports.up = function (knex) {
    return knex.schema
        .createTable('recipe', tbl => {
            //PK
            tbl.increments();
            //name
            tbl
                .string('recipe_name', 255)
                .notNullable()
        })

        .createTable('ingredients', tbl => {
            //PK
            tbl.increments();
            //name
            tbl.string('ingredients_name', 255)
        })

        .createTable('recipe_ingredients', tbl => {
            //FK
            tbl
                .integer('recipe_id')
                .unsigned()
                .references('id')
                .inTable('recipe')
                .onDelete('CASCADE')// if the PK record is deleted
                .onUpdate('CASCADE')// if the PK record is updates

            //FK
            tbl
                .integer('ingredients_id')
                .unsigned()
                .references('id')
                .inTable('ingredients')
                .onDelete('CASCADE')// if the PK record is deleted
                .onUpdate('CASCADE')// if the PK record is updates

            //Composite Key: composes fo the FK's from above. Will be unique
            tbl.primary(['recipe_id', 'ingredients_id'])
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('ingredients_id')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipe')
};
