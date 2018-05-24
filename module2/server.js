const express = require('express')
const bodyParser = require('body-parser')
const quoteRouter = require('./routes.js')
const app = express()

const port = 3000

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'))
app.use('/quotes', quoteRouter)
app.get('/', (req, res) => {
    res.sendStatus(404)
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})