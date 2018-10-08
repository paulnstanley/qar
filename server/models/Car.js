const mongoose = require('mongoose');
const { Schema } = mongoose;

const CarSchema = new Schema({
  make: String,
  model: String,
  minYear: Number,
  maxYear: Number,
  cityMpg: Number,
  hwyMpg: Number,
  fuelOctane: Number,
  familySize: Number,
  avgCost: Number,
  //scoringAttributes are a range of 1-5, to be turned into a score
  scoringAttributes: [
    style:  Number,
    performance: Number,
    reliability: Number,
    utility: Number,
    resale: Number,
    comfort: Number,
    totalCostOwnership: Number,
    swagger: Number,
    technology: Number
  ]
});

module.exports = mongoose.model('Car', CarSchema)
