// server.js
// where your node app starts

// init project
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
function checkHttps(req, res, next){
  // protocol check, if http, redirect to https
  
  if(req.get('X-Forwarded-Proto').indexOf("https")!=-1){
    return next()
  } else {
    res.redirect('https://' + req.hostname + req.url);
  }
}

app.all('*', checkHttps);


app.use(express.static('offline'));  //  app.use(express.static('views')); 


var fs = require('fs');

app.get('/', function(request, response) {
  response.sendFile(__dirname + '/offline/offline.html'); // esponse.sendFile(__dirname + '/index.html');
});
//app.get('/', function(request, response) {
// response.sendFile(__dirname + '/views/index.html');
//});
//app.get('/r0r', function(request, response) {
//  response.sendFile(__dirname + '/views/errorApi.html');
//});
//app.get('/rndr', function(request, response) {
//  response.sendFile(__dirname + '/views/render.html');
//});


var listener = app.listen(process.env.PORT, function() {
  console.log('Your app is listening on port ' + listener.address().port);
});
