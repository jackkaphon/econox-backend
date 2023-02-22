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
    database: 'econox'
})

connection.connect()

app.use(cookieParser())
app.use(cors({
    // origin: 'http://localhost:5173',
    origin: 'https://www.wannabedevs.com',
    credentials: true
}))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/login', (req, res) => {
    res.cookie("user", 1, {
        maxAge: 86400 * 1000,
        httpOnly: true,
        secure: true,
        // sameSite: 'none',
        path: '/',
        domain: 'www.wannabedevs.com'
    })
    res.send('success!')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})