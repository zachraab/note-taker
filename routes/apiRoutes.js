const fs = require("fs");
const path = require("path");
const db = require("../db/db.json");

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
    // assign variable to array in db.json
    const newNote = {
      title: req.body.title,
      text: req.body.text,
      id: db.length + 1,
    };
    //take req.body and add to variable array of notes on db.json
    // fs.writeFile db.json and pass new array

    db.push(newNote);

    console.log(db);

    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(db),
      (err, data) => {
        if (err) throw err;
        //send array response to front-end
        res.json(data);
      }
    );

    res.json(newNote);
  });

  app.delete("/api/notes/:id", (req, res) => {
    const id = Number(req.params.id);
    // filter out deleted items
    const newDB = db.filter((db) => db.id != id);
    fs.writeFile(
      path.join(__dirname, "../db/db.json"),
      JSON.stringify(newDB),
      (err, data) => {
        if (err) throw err;
        //send array response to front-end
        res.json(console.log(`Deleted item ${id}`));
      }
    );
  });
};
