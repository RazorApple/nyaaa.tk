var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(express.static('views'));
app.use(bodyParser.urlencoded({extended: true}));
require('./routes')(app);
// Handle 404
app.use(function (req, res) {
  res.status(404).send("<h1><font color=red><b>4</b><font size=0>0</font><b>4</b></font></h1><h3> <font color=blue>):</font></h3>")
});

// Handle 500
app.use(function (error, req, res, next) {
    res.send('<h1><font color=red><b>500</b></font></h1><h3> <font color=blue>):</font></h3>', 500);

});


function checkHttps(req, res, next) {

    if (req.get('X-Forwarded-Proto').indexOf("https") != -1) {
        return next()
    } else {
        res.redirect('https://' + req.hostname + req.url);
    }
}

app.all('*', checkHttps);

var fs = require('fs');

var listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
