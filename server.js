"use strict";

var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var db = require("./models")

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

//Routes
app.get("/", function (req, res) {
	res.render("home");
});

app.get("/api/burgers", function (req, res) {
	db.burgers_tbl.findAll({}).then(function (burgersDb) {
		res.json(burgersDb);
	});
});

app.post("/api/burgers", function (req, res) {
	db.burgers_tbl.create({
		burger: req.body.burger,
		devoured: req.body.devoured
	}).then(function (burgersDb) {
		res.json(burgersDb);
	});
});

app.put("/api/burgers", function (req, res) {
	db.burgers_tbl.update({
			devoured: req.body.devoured
		}, {
			where: {
				id: req.body.id
			}
		}).then(function (burgersDb) {
			res.json(burgersDb);
		})
		.catch(function (err) {
			res.json(err);
		});
});

app.delete("/api/burgers/:id", function(req, res) {
    db.burgers_tbl.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(burgersDb) {
      res.json(burgersDb);
    });
});


db.sequelize.sync().then(() => {
	app.listen(PORT, function () {
		console.log("==> Listening on port %s. Visit http://localhost:%s in your browser", PORT, PORT)
	});
});