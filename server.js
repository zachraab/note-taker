const express = require("express");

const app = express();
// TODO change port
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing JSON

// TODO review documentation
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// pushes instance of express() to route js files
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
