const mongoose = require('mongoose');
const Car = require ('../models/Car.js');

const GetAllCars = function () {
  console.log('200: Returning all car objects.');
  return Car.find({}).exec();
}

const MatchCar = function (query) {
  console.log('200: Finding matching car.');
  return Car.find({
    'make': query
  }, function(err, result) {
  		if (err) throw err;
  		if (result) {
  			response.json(result)
  		} else {
  			response.send(JSON.stringify({
  				error : 'Error'
			}))
		}
	})
}

const AddNewCar = function (carModel) {
  const car = new Car({
    bodyStyle: carModel.bodyStyle,
    make: carModel.make,
    model: carModel.model,
    minYear: carModel.minYear,
    maxYear: carModel.maxYear,
    cityMpg: carModel.cityMpg,
    hwyMpg: carModel.hwyMpg,
    fuelOctane: carModel.fuelOctane,
    familySize: carModel.familySize,
    avgCost: carModel.avgCost,
    style: carModel.style,
    performance: carModel.performance,
    reliability: carModel.reliability,
    utility: carModel.utility,
    resale: carModel.resale,
    comfort: carModel.comfort,
    totalCostOwnership: carModel.totalCostOwnership,
    swagger: carModel.swagger,
    technology: carModel.technology,
    availableManual: carModel.availableManual,
    comments: carModel.comments
  });

  return car.save();
}

module.exports = {
  GetAllCars,
  AddNewCar,
  MatchCar
}
