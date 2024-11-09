// server.js or app.js
const path = require('path');
const express = require('express');
const app = express();
const port = 4001;

// app.get('/', (req, res) => {
//   res.send('Hello, World!');
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
