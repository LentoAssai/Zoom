'use strict';
const socket = require("socket.io-client");
const welcome = document.querySelector("#welcome");
const form = document.querySelector("form");

function backendDone(msg){
  console.log(`Backend says : ${msg}`);
}

function handleRoomSubmit(event){
  event.preventDefault();
  const input = form.querySelector("input");
  socket.emit("enter_room", input.value, backendDone);
  input.value = "";
}

form.addEventListener("submit", handleRoomSubmit);