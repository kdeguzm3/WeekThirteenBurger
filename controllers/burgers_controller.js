const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

// Routes
router.get("/", function(req, res) {
  burger.all(function(data) {

    var handlebarsObject = {
      burgers: data
    };
    console.log(handlebarsObject);
    res.render("index", handlebarsObject);
  });
});

/*
router.post("/api/burgers", function(req, res) {
  burger.create([
    "name", "sleepy"
  ], [
    req.body.name, req.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});
*/

router.put("/api/cats/:id", function(req, res) {
  var condition = req.params.id;

  burger.update(condition, 1, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;
