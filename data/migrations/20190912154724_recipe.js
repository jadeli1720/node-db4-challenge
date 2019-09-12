
exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', tbl => {
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
            //fk
            tbl
                .integer('recipe_id')
                .unsigned()
                .references('id')
                .inTable('recipes')
                .onDelete('CASCADE')// if the PK record is deleted
                .onUpdate('CASCADE')// if the PK record is updates

            //fk
            tbl
                .integer('ingredient_id')
                .unsigned()
                .references('id')
                .inTable('ingredients')
                .onDelete('CASCADE')// if the PK record is deleted
                .onUpdate('CASCADE')// if the PK record is updates

            //composite key
            tbl.primary(['recipe_id', 'ingredient_id'])

            //quantity
            tbl
                .float('quantity')
                .notNullable()

            //measurements
            tbl
                .string('measurements')
        })


};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('recipe_ingredients')
        .dropTableIfExists('ingredients')
        .dropTableIfExists('recipes')

};

