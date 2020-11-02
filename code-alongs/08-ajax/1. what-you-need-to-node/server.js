console.log('Simple server side web application')

const http = require('http')

const handleRequest = function(request, response) {
    console.log('Some one calling')
        // console.log(request)
    console.dir(response)
    response.end("hi")
}

const server = http.createServer(handleRequest)

server.listen(4567)