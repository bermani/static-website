const express = require('express')

const PORT = 3000

const app = express()
const server = app
  .use(express.static('public_html'))
  .listen(PORT, () => {
    console.log(`Live on http://localhost:${PORT}`)
  })
