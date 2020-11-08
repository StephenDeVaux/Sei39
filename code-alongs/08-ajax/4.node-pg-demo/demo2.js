const pg = require('pg')

const pool = new pg.Pool({ database: 'goodfoodhunting' })

pool.query('SELECT * from dishes', [], (err, res) => {
    // console.log(err ? err.stack : res.rows[0].message)
    console.log(res.rows)
})