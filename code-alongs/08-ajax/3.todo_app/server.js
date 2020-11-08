const express = require('express')
const app = express()
const port = process.env.PORT || 8080

const { Pool } = require('pg')
    // const pg = require('pg')

const pool = new Pool({ database: 'todo_app' })

let results = [
    { id: 1, content: "have afternoon snack" },
    { id: 2, content: "Time to nap" },
    { id: 3, content: "Time to nap again" },
]


//This is actually a static middleware
app.use(express.static('client'))

app.listen(port, () => {
    console.log(`Listetning on port ${port}`)
})

app.get('/', (req, res) => {
    res.send("hello")
})

app.get('/add/:item', (req, res) => {
    results.push({ id: 4, content: req.params.item })
    res.send('ok')
})

app.get('/api/todo', (req, res) => {

    pool.query('SELECT * from todos;', [], (err, dbRes) => {
        res.json(dbRes.rows)
    })
})