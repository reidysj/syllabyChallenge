/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('sections', tbl => {
    tbl.increments()
    tbl.string("section_id").unique()
    tbl.string('title').notNullable()
    tbl.string('book_id').references("book_id").inTable("books").onDelete('CASCADE').onUpdate('CASCADE')
    tbl.text('content')
    tbl.string('parent_section_id').references("section_id").inTable("sections").onDelete('CASCADE').onUpdate('CASCADE')

  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('sections')
};
