var express = require('express');
var prom = require('prom-client');

var app = express();

app.get('/', function(req, res){
    res.send('Helo World');
});

app.listen(3000);

