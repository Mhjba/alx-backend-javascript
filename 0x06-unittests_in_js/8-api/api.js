const express = require('express');

const app = express();
const PORT = 7865;

app.get('/', (request, resp) => {
  resp.send('Welcome to the payment system');
});

app.listen(port, () => {
    console.log("API available on localhost port 7865");
});

module.exports = app;
