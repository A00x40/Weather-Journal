const { app } = require("./application");
let { projectData } = require("./application");

// Get Project Data
const getData = app.get( '/getData' , ( _ , res ) => {
    res.send( projectData ).status(200).end();
});

// Post Data
const postData = app.post( '/postData' , ( req , res ) => {

    projectData = {
        temp: req.body.temp,
        date: req.body.date,
        content: req.body.content
    }

    res.send(projectData).status(200).end();    
});

module.exports = {getData,postData};