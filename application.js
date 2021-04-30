var projectData = {};

// Require Express to run server and routes
const express = require("express");

// Start up an instance of app
const app = express();

/* Middleware*/
// Body Parser is deprecated
app.use( express.urlencoded({extended: true}));
app.use( express.json() );

// Cors for cross origin allowance
const cors = require("cors");
app.use( cors() ); 

// Initialize the main project folder
app.use( express.static('website') );

module.exports = { app , projectData } ;