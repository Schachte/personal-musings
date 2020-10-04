const express = require('express');
const bodyParser = require('body-parser');
const { randomBytes } = require('crypto');
const cors = require('cors');
const axios = require('axios');
const { Client } = require('pg');

const app = express();
app.use(bodyParser.json());
app.use(cors());

var PORT = process.env.port || 4000
const posts = {};

app.get('/posts', (req, res) => {
  const client = new Client({
    user: 'schachte',
    host: 'postgres',
    database: 'schachte-blog',
    password: 'password',
    port: 5432,
  });

  client.connect();

  const query = `
        CREATE table testesjeogeiog(
            email varchar,
            firstName varchar,
            lastName varchar,
            age int
        );
    `;

  return {}
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
