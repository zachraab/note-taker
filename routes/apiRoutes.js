const fs = require("fs");
const path = require("path");
const db = require("../db/db.json");

module.exports = (app) => {
  // link to front end
  //rec params method and string
  app.get("/api/notes", (req, res) => {
    const test = fs.readFile(
      path.join(__dirname, "../db/db.json"),
      "utf8",
      (err, data) => {
        if (err) throw err;
        //send array response to front-end
        res.json(JSON.parse(data));
      }
    );

    console.log(test);
  });

  app.post("/api/notes", (req, res) => {
    // copy code
    // assign variable to array in db.json
    const newNote = req.body;
    //take req.body and add to variable array of notes on db.json
    // fs.writeFile db.json and pass new array

    db.push(newNote);

    console.log(db);

    fs.writeFile(db, JSON.parse(newNote), (err) => {
      if (err) throw err;
      //send array response to front-end
      res.json(JSON.parse(data));
    });

    res.json(newNote);
  });

  app.delete("/api/notes/:id", (req, res) => {
    db.filter(req.params.id);
    // assign array to variable
    // filter out deleted items
    console.log(req.params.id);
  });
};
