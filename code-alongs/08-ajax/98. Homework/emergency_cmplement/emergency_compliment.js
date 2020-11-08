const express = require("express")
const _ = require('lodash');
const app = express()

compliments = [
    "Your instructors love you",
    "High five = ^5",
    "Shut up and take my money",
    "It's almost beer o'clock",
    "The Force is strong with you"
]

colors = ["#FFBF00", "#0080FF", "#01DF3A", "#FF0080"]


app.set('view engine', 'ejs')
app.set('views', './views')

app.get('/', (req, res) => {
    res.render('index', { compliment: _.sample(compliments), color: _.sample(colors), name: null })
})

app.get('/:name', (req, res) => {
    res.render('index', { compliment: _.sample(compliments), color: _.sample(colors), name: req.params.name })
})

app.listen(8080)