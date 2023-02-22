const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
var cookieParser = require('cookie-parser')

const mysql = require('mysql')
const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'admin',
    password: 'password',
    database: 'jack'
})

// connection.connect()

app.use(cookieParser())
app.use(cors({
    // origin: 'http://localhost:5173',
    origin: 'https://www.wannabedevs.com',
    credentials: true
}))

app.get('/', (req, res) => {
    res.cookie("user", 1)
    res.send('Hello World!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})