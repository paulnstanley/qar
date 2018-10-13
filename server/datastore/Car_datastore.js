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

  //parsedQuery looks like this:
  // { budget: 15000
    // commute: 30
    // factors: "reliability"
    // passengers: 5
    // prius: true }

  //now turn those parameters into a search
  // Car.find({parsedQuery}).toArray(function(err, docs) {
  //   assert.equal(err, null);
  //   return docs;
  // });

  let factor = parsedQuery.factors;

  return Car.find({}).
    where('avgCost').lt(parsedQuery.budget).
    where('avgCost').gt(parsedQuery.budget - 5000).
    where('familySize').equals(parsedQuery.passengers).
    sort('totalScore' + (factor*2) + ('prius'*10));
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
    totalScore: carModel.totalScore,
    prius: carModel.prius,
    comments: carModel.comments
  });

  return car.save();
}

module.exports = {
  GetAllCars,
  AddNewCar,
  MatchCar
}
