var express = require('express'),
	app	= express(),
	jade = require('jade');

app.get('/', function(req, res) {
	res.render('index')
});

var server = app.listen('3000', function() {
	var host = server.address('http://localhost:').address;
	var port = server.address('3000').port;

	console.log('My App is listening on http://%s:%s', host, port);
})

// var fs = require('fs');
// app.engine('ntl', function(filePath, options, callback) {
// 	fs.readFile(filePath, function (err, content) {
// 		if (err) return callback(new Error(err));
// 	var rendered = content.toString().replace('#title#', '<title>'+ options.title +'</title>')
// 	.replace('#message#', '<h1>'+ options.message +'<h1>');
// 	return callback(null, rendered);
// 	})
// })

app.set('views', __dirname + '../../views');
app.set('view engine', 'jade');