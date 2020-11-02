const express = require('express')

const app = express()

//Can see the likeness of sinatra, dt reckons inspired by sinatra
//The below are key value pairs - settings that we choose 
app.set('view engine', 'ejs')
app.set('views', './views')
app.get('/', (req, res) => {
    res.end('hello')
})

app.get('/about', (req, res) => {
    res.render('about', { color: "mistyrose" })
})

app.listen(8080)