var express = require('express');
var prom = require('prom-client');

var app = express();

const client = require('prom-client');
const counter = new client.Counter({
    name: 'aula_request_total',
    help: 'Contador de requests'
});

app.get('/', function(req, res){
    res.send('Helo World');
});

app.listen(3000);

