// Connect to mongoose
let mongoose = require("mongoose");

// Set the connection params
let mongooseConnectionConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
// Connect to the database
mongoose.connect("mongodb://localhost/countries", mongooseConnectionConfig);

// Add event listener to see if the connection is working
mongoose.connection.on("connected", () => console.log("Connected Database"));
mongoose.connection.on("disconnected", () => console.log("Database Disconnected"));
mongoose.connection.on("error", error => console.log("Error on connection to the Database", error));



