"use strict";

var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");
var db = require("./models")

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({
	extended: true
}));
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



db.sequelize.sync().then(() => {
	app.listen(PORT, function () {
		console.log("==> Listening on port %s. Visit http://localhost:%s in your browser", PORT, PORT)
	});
});