const db = require("../data/dbConfig.js")

module.exports = {
    add,
    getBy,
    getAllBy,
    getAll
}

function add(book){
    return db("books")
    .returning("id")
    .insert(book)
    .then(([id]) => {
        return getBy(id)
    })
}

function getAll() {
    return db("books")
    .leftJoin("users", "books.author_id", "users.user_id")
    .select("books.*", "users.username as author")
}

function getBy(filter){
    return db('books').first().where(filter)
}

function getAllBy(filter){
    return db('books').where(filter)
}