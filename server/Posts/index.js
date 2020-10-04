const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');

const app = express();
app.use(bodyParser.json());
app.use(cors());

var PORT = process.env.port || 4000
const posts = {};

// TODO: Hook up communication to postgresql here
app.get('/posts', (req, res) => {
  res.send({'data': PORT + 400});
});

app.post('/posts/create', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[id] = {
    id,
    title
  };

  res.status(201).send(posts[id]);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
