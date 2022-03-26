// Import node fetch and fs
let fs = require("fs").promises

// Retrieve data from all countries from the api and save into a json file
const url = "https://restcountries.com/v3.1/all";
fetch(url)
  .then((response) => response.json())
  .then((data) => fs.writeFile("./countries.json", JSON.stringify(data)))
  .catch((error) => console.log(console.log(error)));
