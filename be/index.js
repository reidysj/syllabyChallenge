require('dotenv').config()
const server = require('./api/server.js')

const port = process.env.PORT || 4040
server.listen(port, () => console.log(`\n === Server is running on port ${port} === \n`))