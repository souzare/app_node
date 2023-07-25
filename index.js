var express = require('express');
var prom = require('prom-client');
const register = prom.register;

var app = express();

const client = require('prom-client');
const counter = new client.Counter({
    name: 'aula_request_total',
<<<<<<< HEAD
    help: 'Contador de requests'
});
=======
    help: 'Contador de requests',
    labelNames: ['statusCode']
})
>>>>>>> 475214911ce21a5c69f733fa06b35826fd4a5e98

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

