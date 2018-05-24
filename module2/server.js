const http = require('http')

const port = 3000

const requestHandler = function(req, res) {
    console.log(`New request to ${req.url}`)
    res.end('Welcome')
}

const server = http.createServer(requestHandler)

server.listen(port, () => { console.log(`Listening on port ${port}`)})