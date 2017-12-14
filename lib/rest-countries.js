/**
 * Serve up sample airport data
 * curl http://localhost:5000/samples/airports/?countryCode=MX&elevation=1000
 */
'use strict';
var _ = require('lodash');

module.exports = function(app) {
  const fs = require("fs");
  const querystring = require("querystring");
  const airportJSON = JSON.parse(fs.readFileSync("./lib/airports.json"));
  
  app.get('/samples/airports', (request, response) => {

    const qs = querystring.parse(request.url.split("?")[1]);

    const elevation = qs.elevation;
    const countryCode = qs.countryCode;

    if (elevation === undefined || countryCode === undefined){
      response.status(400);
      response.end('invalid queryString'); 
    }

    console.log(elevation + ' : ' + countryCode);

    const filterAirports = _.filter(airportJSON, function filterAirports(airport) {
        return (airport.country == countryCode && airport.elevation > elevation);
    });

    const message = JSON.stringify(filterAirports);
    response.status(200);
    response.end(message);
  });

};


