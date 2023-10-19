const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const dotenv = require("dotenv").config();
console.log(process.env.CLIENT)
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT,
  }
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  socket.on('msg', (msg) => {
  });
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});