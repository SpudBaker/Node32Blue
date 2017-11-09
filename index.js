'use strict';

var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

app.set('port', (process.env.PORT || 5000));

app.use(cors({origin: ['http://localhost:4200','http://localhost:5000']}));
app.options('*', cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
     next();
});
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.use(express.static(__dirname + '/public'));
app.get('/', (request, response) => {
  response.render('index');
});

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
