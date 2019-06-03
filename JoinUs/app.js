const express = require('express')
const mysql = require('mysql')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}))
app.use(express.static(__dirname + "/public"))
app.set("view engine", "ejs")

// Database related code
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'join_us',
    password: 'password'
})


// End of Database related code

// Server related code
app.get('/', (req, res) => {
    const q = "SELECT * FROM total_users"

    connection.query(q, (err, results) => {
        if (err) throw err
        const count = results[0]["COUNT(*)"]
        res.render('index', {
            data: count
        })
    })
})

app.post('/register', (req, res) => {
    const person = {
        email: req.body.email
    }
    const q = "INSERT INTO users SET ?"
    connection.query(q, person, (err, result) => {
        if (err) throw err
        res.redirect('/')
    })
})

const portNum = 8000
app.listen(portNum, () => {
    console.log(`App listen on port ${portNum}`)
})
// End of server related code