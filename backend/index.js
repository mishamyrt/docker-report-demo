const http = require('http')

const host = '0.0.0.0'
const port = 8080

http
  .createServer((req, res) => {
    res.writeHead(200)
    res.end(`Request to ${req.url} is successful\n`)
  })
  .listen(port, host, () => console.log(`Server started on ${host}:${port}`))
