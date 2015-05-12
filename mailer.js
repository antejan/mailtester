var _ = require('lodash'),
	nodemailer = require('nodemailer'),
	secret = require('./secret');

/**
* MAIL
*/
var transporter = nodemailer.createTransport({
	service: 'Gmail',
	auth: secret.auth
});

var defaultMailOptions = {
	from: secret.auth.user,
	to: '',
	subject: 'mailtester',
	text: '',
	html: ''
};

var sendMail = module.exports = function(options) {
	transporter.sendMail(_.extend(defaultMailOptions, options), function(error, info) {
		if(error){
			console.log(error);
		} else {
			console.log('Message sent: ' + info.response);
		}
	});
}
