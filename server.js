const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 4625;

let corsOptions = {
	origin: "http://localhost:4626"
};

//Parsing HTTP requests with content-type application/json and application/x-www-form-urlencoded
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Defining project front root
app.use(express.static("dist"));

//Importing routes
require("./app/routes/main.routes.js")(app);

app.listen(PORT, () => {
	console.log(`Server listening on port ${PORT}`);
})