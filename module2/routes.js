const express = require('express')
const quotes = require('./test-data/quotes.js')
const router = express.Router()

router.get('/', (req, res) => {
    if(req.query.year) {
        res.json({msg:`The year is ${req.query.year}`})
    }
    else {
        res.json(quotes)
    }
})

router.get('/:id', (req, res) => {
    res.json({msg: `The id is ${req.params.id}`})
})

router.post('/', (req, res) => {
    console.log(req.body)
    res.json(req.body)
})

module.exports = router