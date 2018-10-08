const _ = require('lodash');
const { URL } = require('url');

const carData = require('./datastore/Car_datastore.js');
const carRouter = require('express').Router();

carRouter.get('/api/cars/all', function (request, response) {
  carData.GetAllCars().then(foundCars => response.json(foundCars));
})

carRouter.post('/api/cars/new', function (request, response) {
  let carModel = {
    make: request.body.make,
    model: request.body.model,
    minYear: request.body.minYear,
    maxYear: request.body.maxYear,
    cityMpg: request.body.cityMpg,
    hwyMpg: request.body.hwyMpg,
    fuelOctane: request.body.fuelOctane,
    familySize: request.body.familySize,
    avgCost: request.body.avgCost,
    //scoringAttributes are a range of 1-5, to be turned into a score
    scoringAttributes: [
      style:  request.body.scoringAttributes.style,
      performance: request.body.scoringAttributes.performance,
      reliability: request.body.scoringAttributes.reliability,
      utility: request.body.scoringAttributes.utility,
      resale: request.body.scoringAttributes.resale,
      comfort: request.body.scoringAttributes.comfort,
      totalCostOwnership: request.body.scoringAttributes.totalCostOwnership,
      swagger: request.body.scoringAttributes.swagger,
      technology: request.body.scoringAttributes.technology
    ]
  }
  carData.AddNewCar(carModel);
  response.end(console.log('200: New car added.'));

})

module.exports = carRouter;
