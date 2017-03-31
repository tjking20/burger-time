var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js")


//finds all existing burgers
router.get("/", function(req, res){
	burger.all(function(data){
		var hbsObject = {
			burgers: data
		};
		console.log(hbsObject);
		res.render("index", hbsObject)
	});
});


//adds new burger to database
router.post("/create", function(req, res){
	burger.create([
    "burger_name"
    ], [
    req.body.burgerName
  ], function() {
    res.redirect("/");
  });
});

router.put("/devour/:id", function(req, res){
	var condition = "id = " + req.params.id;
	// res.send("hi") works
	burger.update({
		devoured: true
	}, condition, function(){
		res.redirect("/");
	});
})
//still need post and put

module.exports = router;

