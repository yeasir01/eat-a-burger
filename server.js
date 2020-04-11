"use strict";

var express = require("express");
var exphbs = require("express-handlebars");
var mysql = require("mysql");

var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

app.get("/", function (req, res) {
	res.render("home");
});

app.listen(PORT, () => {
	console.log(`server listening on: ${PORT}`);
});