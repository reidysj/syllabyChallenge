const express = require('express')
const helmet = require('helmet')
const cors = require('cors')
const server = express()

const authRouter = require('../auth/router.js')
const booksRouter = require('../books/router.js')

server.use(cors())
server.use(helmet())
server.use(express.json())
server.use('/auth', authRouter)
server.use('/books', booksRouter)

server.get('/', (req, res) => {
    res.status(200).json({api: 'API server is up and running'})
})

module.exports = server;