const _ = require('lodash');
const { URL } = require('url');
const MongoQS = require('mongo-querystring');
const carData = require('../datastore/Car_datastore.js');
const carRouter = require('express').Router();

carRouter.get('/api/cars/all', function (request, response) {
  carData.GetAllCars().then(foundCars => response.json(foundCars));
})

carRouter.get('/api/cars/:query', function (request, response) {
  let query = request.params.query;
  carData.MatchCar(query, request, response).then(foundMatch => response.json(foundMatch));
})

carRouter.post('/api/cars/new', function (request, response) {
  let carModel = {
    bodyStyle: request.body.bodyStyle,
    make: request.body.make,
    model: request.body.model,
    minYear: request.body.minYear,
    maxYear: request.body.maxYear,
    cityMpg: request.body.cityMpg,
    hwyMpg: request.body.hwyMpg,
    fuelOctane: request.body.fuelOctane,
    familySize: request.body.familySize,
    avgCost: request.body.avgCost,
    style: request.body.style,
    performance: request.body.performance,
    reliability: request.body.reliability,
    utility: request.body.utility,
    resale: request.body.resale,
    comfort: request.body.comfort,
    totalCostOwnership: request.body.totalCostOwnership,
    swagger: request.body.swagger,
    technology: request.body.technology,
    availableManual: request.body.availableManual,
    comments: request.body.comments
  }
  carData.AddNewCar(carModel);
  response.end(console.log('200: New car added.'));

})

module.exports = carRouter;
