'use strict';

const express = require('express');
const app = express();
const staticServe = express.static(`${ __dirname }/public`);
const cors = require('cors');
const bodyParser = require('body-parser');

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

require('./lib/rest-countries.js')(app);
app.use("/", staticServe);
app.use("*", staticServe);

app.listen(app.get('port'), () => {
  console.log('Node app is running on port', app.get('port'));
});
