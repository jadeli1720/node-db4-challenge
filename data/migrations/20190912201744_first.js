
exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
            //PK
            tbl.increments();
            //name
            tbl
                .string('recipe_name', 255)
                .notNullable()
                .unique()
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
                .inTable('recipes')
                .onDelete('CASCADE')// if the PK record is deleted
                .onUpdate('CASCADE')// if the PK record is updates

            // //FK
            tbl
                .integer('ingredients_id')
                .unsigned()
                .references('id')
                .inTable('ingredients')
                .onDelete('CASCADE')// if the PK record is deleted
                .onUpdate('CASCADE')// if the PK record is updates

            // //Composite Key: composes all of the FK's from above
            tbl.primary(['recipe_id', 'ingredients_id'])

            //quantity
            tbl
                .float('quantity', 2)
                .notNullable()

            //measurements
            tbl
                .string('measurements')
        })

        .createTable('instructions', tbl => {
            //pk
            tbl
                .increments()
            //instructions
            tbl
                .string('instructions', 255)
                .notNullable()
            //FK
            tbl
                .integer('recipe_id')
                .unsigned()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADE')// if the PK record is deleted
                .onUpdate('CASCADE');// if the PK record is updates
        })

};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('instructions')
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')
};
