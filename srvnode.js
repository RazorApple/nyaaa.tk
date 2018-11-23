var express = require('express');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var hsts = require("hsts");
var app = express();
var fs = require('fs');

require('./routes')(app);
app.use(express.static('views'));
app.use(bodyParser.urlencoded({extended: true}));

// Handle 404
app.use(function (req, res) {
  res.status(404).send("<h1><font color=red><b>4</b><font size=0>0</font><b>4</b></font></h1><h3> <font color=blue>):</font></h3>")
});

// Handle 500
app.use(function (error, req, res, next) {
    res.status(500).send('<h1><font color=red><b>500</b></font></h1><h3> <font color=blue>):</font></h3>', 500);

});


app.use(helmet({frameguard: true, referrerPolicy: true, hsts: false}));

app.use(hsts({
    // Must be at least 1 year to be approved
    maxAge: 31536000,

    // Must be enabled to be approved
    includeSubDomains: true,
    preload: true
}))
function checkHttps(req, res, next) {

    if (req.get('X-Forwarded-Proto').indexOf("https") != -1) {
        return next()
    } else {
        res.redirect('https://' + req.hostname + req.url);
    }
}

app.all('*', checkHttps);



var listener = app.listen(process.env.PORT, function () {
    console.log('Your app is listening on port ' + listener.address().port);
});
