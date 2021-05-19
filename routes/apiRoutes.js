const fs = require("fs");
const path = require("path");

module.exports = (app) => {
  // link to front end
  //rec params method and string
  app.get("/api/notes", (req, res) => {
    fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
      if (err) throw err;
      //send array response to front-end
      res.json(JSON.parse(data));
    });
  });

  app.post("/api/notes", (req, res) => {
    // copy code
    // assign variable to array in db.json
    //take req.body and add to variable array of notes on db.json
    // fs.writeFile db.json and pass new array
    console.log(req.body);
  });

  app.delete("/api/notes/:id", (req, res) => {
    // assign array to variable
    // filter out deleted items
    console.log(req.params.id);
  });
};
