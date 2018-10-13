const mongoose = require('mongoose');
const QS = require('querystring');
const Car = require ('../models/Car.js');

const GetAllCars = function () {
  console.log('200: Returning all car objects.');
  return Car.find({}).exec();
}

//example query: ?budget=10000&?passengers=2&?bodyStyle=sedan&?reason=cheaper&?manual=false&
//?swagger=false&?prius=false&?commute=10&?onlyCar=false&?diy=false

//process the search request here
const MatchCar = function (query, request, response) {
  console.log('200: Finding matching car.');
  console.log(query);

  let parsedQuery = QS.parse(query);
  console.log(parsedQuery);

  return Car.find(parsedQuery).exec()
}

  // return Car.find({
  //   'make': query
  // })

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
