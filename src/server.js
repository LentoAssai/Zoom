'use strict';
import express from 'express';
import http from 'http';
import SocketIo from 'socket.io';

const app = express();
app.set('view engine', 'pug');
app.set('views', __dirname + '/views');
app.use('/public', express.static(__dirname + '/public'));
app.get('/', (req,res) => res.render('home'));
app.get('/*', (req,res) => res.redirect('/'));

const httpServer = http.createServer(app);
const wsServer = SocketIo(httpServer);

wsServer.on("connection", (socket) => {
  socket.on("enter_room", (roomName, done) => {
    console.log(roomName);
    setTimeout(() => done("hello from backend"), 5000);
  });
});
  
httpServer.listen(3000, () => console.log("Listening on port 3000"));

// const wss = new WebSocket.Server({httpServer});

// const sockets = [];

// wss.on("connection", (socket) => {
//   sockets.push(socket);
//   console.log("Connected to Browser!");
//   socket["name"] = "Anonymous";
//   socket.on("close", () => console.log("Disconnected to Browser!"));
//   socket.on("message", (msg) => {
//     const parsed = JSON.parse(msg);
//     switch (parsed.type){
//       case "name":
//         socket["name"] = parsed.value;
//         break;
//       case "message":
//         sockets.forEach((sock) => {
//           sock.send(`${socket.name} : ${parsed.value}`);
//         });
//     }
//   });
// });
