const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();
const PORT = 1245;
const DB_PATH = process.argv.length > 2 ? process.argv[2] : '';

/**
 * Counts the students in a CSV data file.
 * @param {String} dataPath The path to the CSV data file.
 */

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(DB_PATH)
    .then((report) => {
      const responseText = `This is the list of our students\n${report}`;
      res.set('Content-Type', 'text/plain');
      res.send(responseText);
    })
    .catch((err) => {
      const errorMessage = err instanceof Error ? err.message : err.toString();
      const responseText = `This is the list of our students\n${errorMessage}`;
      res.set('Content-Type', 'text/plain');
      res.send(responseText);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
