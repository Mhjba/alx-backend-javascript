const http = require('http');
const countStudents = require('./3-read_file_async');

const PORT = 1245;
const DB_PATH = process.argv.length > 2 ? process.argv[2] : '';

const app = http.createServer((req, res) => {
  if (req.url === '/') {
    const responseText = 'Hello Holberton School!';
    res.setHeader(200, { 'Content-Type': 'text/plain' });
    res.end(responseText);
  } else if (req.url === '/students') {
    res.setHeader(200, { 'Content-Type': 'text/plain' });
    res.write('This is the list of our students\n');

    countStudents(DB_PATH)
      .then((report) => {
        res.end(report);
      })
      .catch((err) => {
        res.end(err.message);
      });
  } else {
    res.setHeader(404, { 'Content-Type': 'text/plain' });
    res.end('Not Found');
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

module.exports = app;
