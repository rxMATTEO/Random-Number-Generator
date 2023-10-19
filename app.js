const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const dotenv = require("dotenv").config();
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT,
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/number', (req, res) => {
  console.log(req.body);
  res.send(JSON.stringify(req.body));
});

io.on('connection', (socket) => {
  socket.on('msg', (msg) => {
    console.log(msg)
  });
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});