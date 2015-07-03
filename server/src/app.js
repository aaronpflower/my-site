var express = require('express'),
	app	= express(),
	jade = require('jade');

app.get('/', function(req, res) {
	res.render('index')
});

app.get('/author', function(req, res) {
	res.render('author')
});

app.get('/copy-writer', function(req, res) {
	res.render('copy-writer')
});

app.get('/portfolio', function(req, res) {
	res.render('portfolio')
});

var server = app.listen('3000', function() {
	var host = server.address().address;
	var port = server.address().port;

	console.log('My App is listening on http://%s:%s', host, port);
})

app.set('views', __dirname + '../../views');
app.set('view engine', 'jade');
app.use('/client', express.static(__dirname + '/../../client'))

