var express = require('express');
var app = express();

var PORT = process.env.PORT || 3005;

app.all('/*', function (req, res) {
	res.send('\
		<!DOCTYPE html>\
		<html>\
			<title> ToDo App</title>\
		</head>\
		<body>\
			<h1>Whats up Ksquare</h1>\
</body>\
</html>\
')
})

app.listen(PORT, function() {
	console.log('Server running on' + PORT)
})