const express = require('express')
const router = express.Router()
const booksDb = require('./model.js')
const uuid = require('uuid')
const sectionsDb = require('../sections/model.js')

//create a book
router.post('/', (req, res) => {
    booksDb.add({author_id: req.body.user_id, title: req.body.title, book_id: uuid.v4()})
    .then(book => {
        res.status(201).json(book)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

//get all books 
router.get('/', (req, res) => {
    booksDb.getAll().then (books => {
        res.status(200).json(books)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

//get books by author
router.get('/author/:id', (req, res) => {
    const author_id = req.params.id
    booksDb.getAllBy({author_id})
    .then(authorsBooks => {
        res.status(200).json(authorsBooks)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})

//add section to book
router.post('/:id', (req, res) => {
    const book_id = req.params.id
    const section = req.body
    const parent_section_id = req.body.parent_section_id
    section.book_id = book_id
    section.section_id = uuid.v4()
    section.parent_section_id = parent_section_id
    sectionsDb.add(section)
    .then(section => {
        res.status(201).json(section)
    })
    .catch(err => {
        res.status(500).json({error: err.message})
    })
})


module.exports = router