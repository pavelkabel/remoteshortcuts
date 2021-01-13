// initialize required libraries
var express = require('express');
var request = require('request');
var fs = require('fs');
var app = express();

//socket.io startup
const
  io = require("socket.io"),
  //you can change socketio port here, if you so desire
  server = io.listen(8889);
let
  sequenceNumberByClient = new Map();
server.on("connection", (socket) => {
  console.info(`Client connected [id=${socket.id}]`);
  sequenceNumberByClient.set(socket, 1);
  socket.on("disconnect", () => {
    sequenceNumberByClient.delete(socket);
    console.info(`Client gone [id=${socket.id}]`);
  });
});
app.use(express.static(__dirname + '/public'))
require('events').EventEmitter.defaultMaxListeners = 100;

//header settings
app.use(function (req, res, next) {
   //if you change server port, change it here as well
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers');
  next();
});


//handle buttonpress requests from frontend
server.on("connection", (socket) => {
  socket.on('click', bttid => {
    console.log("recieved: " + bttid)
    //spawn .bat file named the same as the button id, this lets you execute anything you want
    var batid = bttid + ".bat"
    const {
      spawn
    } = require('child_process');
    const bat = spawn('cmd.exe', ['/c', batid]);
    bat.stdout.on('data', (data) => {});
    bat.stderr.on('data', (data) => {});
    bat.on('exit', (code) => {});
  });
})

//you can change server port here, if you so desire
console.log('Listening on 8888');
app.listen(8888);