// Import mongoose
let mongoose = require("mongoose");

// Ser a mongoose schema
const countrySchema = new mongoose.Schema({
  name: String,
  capital: Array,
  region: String,
  population: Number,
});

//Export the country model to be available to other files
module.exports = mongoose.model("Country", countrySchema);
