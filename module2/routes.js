const express = require('express')
const quotes = require('./test-data/quotes.js')
const sqlite = require('sqlite3')
const config = require('./config.js')

const router = express.Router()

const db = new sqlite.Database(config.databaseName)

router.get('/', (req, res) => {
    db.all('SELECT * FROM Quotes', (err, rows) => {
        if(err) res.status(500).json({error: 'Error retrieving data from database'})
        else {
            res.status(200).json(rows)
        }
    })
})

router.get('/:id', (req, res) => {
    db.get(`SELECT * FROM Quotes where rowid = ${req.params.id}`, (err, row) => {
        if(err) res.status(500).json({error: `Error retrieving quote with id ${req.params.id}`})
        else {
            res.status(200).json(row)
        }
    })
})

router.post('/', (req, res) => {
    console.log(`Creating quote record in database`)
    db.run(`INSERT INTO Quotes VALUES (?,?,?)`, [req.body.quote, req.body.author, req.body.year], (error) => {
        if(error) res.status(500).json({error: `Error insert record in database`})
        else {
            res.status(200).json({status: "Success", msg:"Quote successfully inserted"})
        }
    })
})

module.exports = router