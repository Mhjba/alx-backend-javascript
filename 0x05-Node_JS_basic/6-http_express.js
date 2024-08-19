const express = require('express');

const app = express();
const PORT = 1245;

app.get('/', (request, response) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
});

module.exports = app;
