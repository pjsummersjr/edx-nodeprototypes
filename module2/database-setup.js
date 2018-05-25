const sqlite = require('sqlite3')
const config = require('./config.js')

const db = new sqlite.Database(config.databaseName)

db.serialize(() => {
    //db.run('CREATE TABLE Quotes(quote TEXT, author TEXT, year INTEGER)')
    db.run('INSERT INTO Quotes VALUES ("Life is short", "Unknown", 1902)')
})