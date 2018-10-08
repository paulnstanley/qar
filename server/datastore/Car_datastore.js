const mongoose = require('mongoose');
const Car = require ('./models/Car.js');

const GetAllCars = function () {
  console.log('Returning all car objects.');
  return Car.find({}).exec();
}

const AddNewCar = function (carModel) {
  const car = new Car({
    make: carModel.make,
    model: carModel.model,
    minYear: carModel.minYear,
    maxYear: carModel.maxYear,
    cityMpg: carModel.cityMpg,
    hwyMpg: carModel.hwyMpg,
    fuelOctane: carModel.fuelOctane,
    familySize: carModel.familySize,
    avgCost: carModel.avgCost,
    //scoringAttributes are a range of 1-5, to be turned into a score
    scoringAttributes: [
      style:  carModel.scoringAttributes.style,
      performance: carModel.scoringAttributes.performance,
      reliability: carModel.scoringAttributes.reliability,
      utility: carModel.scoringAttributes.utility,
      resale: carModel.scoringAttributes.resale,
      comfort: carModel.scoringAttributes.comfort,
      totalCostOwnership: carModel.scoringAttributes.totalCostOwnership,
      swagger: carModel.scoringAttributes.swagger,
      technology: carModel.scoringAttributes.technology
    ]
  });

  return car.save();
}

module.exports = {
  GetAllCars,
  AddNewCar
}
