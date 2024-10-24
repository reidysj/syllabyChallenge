/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('books', tbl => {
    tbl.increments()
    tbl.string('book_id').unique()
    tbl.string('title').notNullable()
    tbl.string('author_id').references("user_id").inTable('users').onDelete('CASCADE').onUpdate('CASCADE')
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('books')
};
