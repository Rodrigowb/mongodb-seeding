// Importing the json file (First raw data getted)
let data = require("./countries.json");
// Import the file that connects with the db
require("./connect.js")
// Import mongoose
let mongoose = require('mongoose')
// Import the schema and module for our db
let Country = require("./Country.js")

let countries = []
for (let i = 0; i < data.length; i++) {
  countries.push({
    name: data[i].name.common,
    capital: data[i].capital,
    region: data[i].region,
    population: data[i].population
  })
}

// Delete the content from the database to avoid duplicated data
Country.deleteMany({})
  // Insert the seed data into the db
  .then(() => Country.create(countries))
  // Disconnect mongoose
  .then(mongoose.disconnect)
  // If ok, disconnect the db
  .then(() => console.log("Done!"))
  // Else catch an error
  .catch((error) => console.log(error))




