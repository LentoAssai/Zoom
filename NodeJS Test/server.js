const express = require('express');
const app = express();

app.listen(4000);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/pet', function(req,res){
  res.send('펫 사이트 입니다.');
});

app.get('/beauty', function(req, res){
  res.send('뷰티 사이트 입니다.');
});