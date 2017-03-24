var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js")

router.get("/", function(req, res){
	// res.send("hi")
	burger.all(function(data){
		var hbsObject = {
			burgers: data
		};
		// res.send(hbsObject);
		console.log(hbsObject);
		res.render("index", hbsObject)
	});
});

router.post("/create", function(req, res){
	// res.send('hi') wokrs
	// res.send(req.body.burgerName) works
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

