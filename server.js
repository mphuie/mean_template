var express = require('express');
var app = express();
var mongoose = require('mongoose')

var port = process.env.PORT | 3000;

app.configure(function() {
	app.use(express.static(__dirname + '/public'));
	app.use(express.logger('dev'));
	app.use(express.bodyParser());
	app.use(express.methodOverride());

});

app.get("/", function(req, res) {
	res.sendfile('./public/views/index.html');
})

app.listen(port);