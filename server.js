const { app } = require("./application");
const { getData , postData } = require("./appRoutes");

// Setup Server
const port = 5000;

const server = app.listen( port , () => {
    console.log(`Server running on port ${port}`)
})
