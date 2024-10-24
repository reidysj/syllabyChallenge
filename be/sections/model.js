const db = require('../data/dbConfig.js')

module.exports = {
    add
}

function add(section){
    return db("sections")
    .returning("id")
    .insert(section)
    .then(([id]) => {
        return getBy(id)
    })
}

function getBy(filter){
    return db('sections').first().where(filter)
}