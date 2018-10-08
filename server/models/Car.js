const mongoose = require('mongoose');
const { Schema } = mongoose;

const CarSchema = new Schema({
  bodyStyle: String,
  make: String,
  model: String,
  minYear: Number,
  maxYear: Number,
  cityMpg: Number,
  hwyMpg: Number,
  fuelOctane: Number,
  familySize: Number,
  avgCost: Number,
  style: Number,
  performance: Number,
  reliability: Number,
  utility: Number,
  resale: Number,
  comfort: Number,
  totalCostOwnership: Number,
  swagger: Number,
  technology: Number,
  availableManual: Boolean,
  comments: String
});

module.exports = mongoose.model('Car', CarSchema)
