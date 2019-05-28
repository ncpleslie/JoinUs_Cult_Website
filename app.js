const faker = require('faker')
const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'join_us',
    password: 'password'
})

connection.connect((err) => {
    if (err) throw err
    console.log('Connected!')
})

// let query = 'SELECT * FROM total_users'

// connection.query(query, (err, res, fields) => {
//     if (err) throw err
//     console.log(`This solution is:`)
//     console.log(res[0]['COUNT(*)'])
// })


// CREATING FAKE DATA FOR MySQL DATABASE
//
//
// let data = []
// for (let i = 0; i < 500; i++) {
//     data.push([faker.internet.email(), faker.date.past()])
// }

// let query = 'INSERT INTO users (email, created_at) VALUES ?'
// connection.query(query, [data], (err, result) => {
//     if (err) throw err
//     console.log(result)
// })

connection.end()