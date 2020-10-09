const express = require('express')
const bodyParser = require('body-parser')
const {randomBytes} = require('crypto')
const cors = require('cors')
const axios = require('axios')
const Pool = require('pg').Pool

const app = express()
app.use(bodyParser.json())
app.use(cors())

var PORT = process.env.port || 4000
const posts = {}

const {dbuser, dbpassword, database} = process.env

const pool = new Pool({
    user: dbuser,
    database,
    password: dbpassword,
    host: 'postgres',
    port: 5432,
})

app.get('/posts/:limit?', (req, res) => {
    const limit = req.params.limit || Number.MAX_SAFE_INTEGER
    pool.query(`SELECT * FROM posts ORDER BY id DESC LIMIT ${limit}`, (error, results) => {
        if (error) {
            console.log(error)
            res.send(500).json({error: 'bad query'})
        }
        res.status(200).json(results.rows)
    })
})

app.post('/posts/create', async (req, res) => {
    const id = randomBytes(4).toString('hex')
    const {title} = req.body

    posts[id] = {
        id,
        title,
    }

    res.status(201).send(posts[id])
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}!`)
})
