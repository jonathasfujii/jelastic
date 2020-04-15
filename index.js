var express = require('express')
var bodyParser = require('body-parser')

var app = express()

app.use(bodyParser.urlencoded({ extended:true}))
app.use(bodyParser.json()) 



app.get('/', function(req, res, next) {
	res.send('home')
});

app.get('/pastaa', function(req, res, next) {
	res.send('Pasta A')
});

app.get('/pastab', function(req, res, next) {
	res.send('Pasta B')
});

									
var port = process.env.PORT || 3000;
app.listen(port, function () {
	console.log('Servidor no ar na porta %s', port);
});
