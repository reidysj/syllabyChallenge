/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('collaborators', tbl => {
    tbl.increments()
    tbl.string("book_id").references("book_id").inTable("books").onDelete('CASCADE').onUpdate('CASCADE')
    tbl.string("user_id").references("user_id").inTable("users").onDelete('CASCADE').onUpdate('CASCADE')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('collaborators')
};
