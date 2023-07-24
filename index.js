var express = require('express');
var prom = require('prom-client');
const register = prom.register;

var app = express();

const client = require('prom-client');
const counter = new client.Counter({
    name: 'aula_request_total',
    help: 'Contador de requests'
})

app.get('/', function(req, res){
    counter.inc();
    res.send('Helo World');
});

app.get('/metrics', async function(req, res){
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
})

app.listen(3000);

