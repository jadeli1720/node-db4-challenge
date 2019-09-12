
exports.up = function (knex) {
    return knex.schema
        .createTable('recipe', tbl => {
            //PK
            tbl.increments();
            //name
            tbl.string()
        })

        .createTable('ingredients', tbl => {
            //PK
            tbl.increments();
            //name
            tbl.string()
        })

        .createTable('recipe', tbl => {
            //FK

            //FK
            
            //Composite Key: composes fo the FK's from above. Will be unique
        })
};

exports.down = function (knex) {

};
