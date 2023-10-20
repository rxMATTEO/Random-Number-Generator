const express = require('express');
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const useRandom = require("./utils/useRandom");
const {clearInterval} = require("timers");
require("dotenv").config();
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT,
  }
});
let intervalId = null;

app.post('/number', (req, res) => {
  const { minMax: [min, max], frequency, id } = req.body;
  const interval = setInterval(() => {
    io.emit('random', useRandom(min, max));
  }, frequency * 1000);
  intervalId = interval;
  res.status(200);
});

io.on('connection', (socket) => {
  console.log('client socket connected');
  socket.on('stop', () => {
    clearInterval(intervalId);
  });
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});