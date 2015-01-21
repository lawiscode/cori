var express = require('express');
var fs = require('fs');
var http = require('http');
var path = require('path');
var qna = require("./qna.js").data;
var cons = require('consolidate');

var app = express();
app.engine('html', cons.underscore);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'static')));

app.get('/qna', function(req, res) {
    res.json(qna);
});

app.get('/', function(req, res) {
    res.render('index', {});
});

app.get('/more', function(req, res) {
    res.render('more', {});
});


var server = app.listen(app.get('port'), function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);


});
