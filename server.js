var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));


app.listen(PORT, function() {
  console.log('listening on: http://localhost' + PORT);
});


require('./app/routing/htmlRoutes.js')(app);

require('./app/routing/apiRoutes.js')(app);