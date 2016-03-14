var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var consign = require('consign');

app.use(express.static('./public'));

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

consign({cwd: 'app'}).include('models').then('api').then('routes').into(app);

module.exports = app;