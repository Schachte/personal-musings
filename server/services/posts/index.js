const express = require('express')
const bodyParser = require('body-parser')
const { randomBytes }  = require('crypto')

const app = express()
app.use(bodyParser.json())

const posts = {};

app.get('/posts', (req, res) => {
    res.send(posts);
})

app.post('/posts', (req, res) => {
    const id = randomBytes(5).toString('hex')
    const { title } = req.body

    posts[id] = {
        id, 
        title
    }

    res.status(401).send(posts[id])
})

app.listen(4000, () => {
    console.log('Listening on port 4000')
})