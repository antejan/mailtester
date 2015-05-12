var _ = require('lodash'),
	express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	mailer = require('./mailer');

/**
* SERVER
*/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); 

app.use(express.static(__dirname + '/static'));

app.get('/', function (req, res) {
	res.send(__dirname + '/static/index.html');
});

app.post('/', function (req, res) {
	res.end(mailer(req.body));
});

var server = app.listen(3000, function () {
	console.log('Server started http://localhost:3000');
});