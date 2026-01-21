const express = require('express');
const http = require('http');
const path = require('path');


const app = express();
const server = http.createServer(app);
const port = 8080;

app.use(express.static(path.join(__dirname, '../dist')));
app.use(express.json());
app.set('trust proxy', true)

// app.get("*", (req, res) => {
//   res.sendfile(path.join(__dirname, '../dist/index.html'));
// });

server.listen(port, () => {
  console.log(`Server running on port:${port}`);
});
