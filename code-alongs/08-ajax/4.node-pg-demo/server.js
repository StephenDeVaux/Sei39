const { Client } = require('pg')
const client = new Client({
    database: 'goodfoodhunting'
})

client.connect()

client.query('SELECT * from dishes', [], (err, res) => {
    // console.log(err ? err.stack : res.rows[0].message)
    console.log(res)
    client.end()
})