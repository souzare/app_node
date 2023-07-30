var express = require('express');
var prom = require('prom-client');
const register = prom.register;

var app = express();


const counter = new prom.Counter({
    name: 'aula_request_total',
    help: 'Contador de requests',
    labelNames: ['statusCode']
});

app.get('/', function(req, res){
    counter.labels('200').inc();
    counter.labels('300').inc();
    res.send('Helo World');
});

app.get('/metrics', async function(req, res){
    res.set('Content-Type', register.contentType);
    res.end(await register.metrics());
})

app.listen(3000);

