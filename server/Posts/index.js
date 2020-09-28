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

app.get('/', (req, res) => {
  res.send({'PORT IS x: ': PORT});
});

app.get('/posts', (req, res) => {
  res.send({'PORT IS x: ': PORT});
});

app.post('/posts/create', async (req, res) => {
  const id = randomBytes(4).toString('hex');
  const { title } = req.body;

  posts[id] = {
    id,
    title
  };

  await axios.post('http://event-bus-srv:4005/events', {
    type: 'PostCreated',
    data: {
      id,
      title
    }
  });

  res.status(201).send(posts[id]);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
