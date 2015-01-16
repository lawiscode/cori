var express = require('express');
var fs = require('fs');
var http = require('http');
var path = require('path');
//var sessions = require("client-sessions");
var cons = require('consolidate');
// var mongoid = require('mongodb').ObjectID;
// var mongodb = require('mongodb');
// var dbserver = new mongodb.Server("127.0.0.1", 27017, {});
// var db = new mongodb.Db('api', dbserver, {
//     w: 0
// });

// var client;
// db.open(function(err, this_client) {
//     client = this_client;
// });

var app = express();
app.engine('html', cons.underscore);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');
//app.use(sessions({
//    cookieName: 'session',
//    secret: 'shogologobangoshey'
//}));
//app.use(express.bodyParser());
//app.use(express.compress());

app.set('port', process.env.PORT || 3000);

app.use(express.static(path.join(__dirname, 'static')));

app.get('/questions', function(req, res) {
    var date = {
        date: new Date().getFullYear()
    };
    var data = [{
        id: 0,
        question: "What is your name?",
        options: [{
            answer: {
                text: "Yes",
                next: 0
            }
        }, {
            answer: {
                text: "No",
                next: 0
            }
        }, {
            answer: {
                text: "Not sure",
                next: 0
            }
        }]
    }];
    var json = {
        date: date,
        data: data
    };
    res.json(json);
});

app.get('/', function(req, res) {
    res.render('index', {});
});

app.get('/contact', function(req, res) {
    var json = {
        date: new Date().getFullYear()
    };
    var stream = mu.compileAndRender(__dirname + '/templates/index.html', json);
    stream.pipe(res);
});


var server = app.listen(app.get('port'), function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://%s:%s', host, port);


});


// app.param(function(name, fn) {
//     if (fn instanceof RegExp) {
//         return function(req, res, next, val) {
//             var captures;
//             if (captures = fn.exec(String(val))) {
//                 req.params[name] = captures[0];
//                 next();
//             } else {
//                 next('route');
//             }
//         }
//     }
// });
// app.param('id', /^[0-9a-f]{24}$/);
