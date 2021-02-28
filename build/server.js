"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var PORT = process.env.PORT;
var app = express_1.default();
//Public
app.use(express_1.default.static("./src/public"));
//Views
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', './src/views');
//body parsing
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
//TODO fix the sidenav
//Routes and handlers
app.get("/", function (req, res) {
    res.render("index");
});
app.get("/sign-up", function (req, res) {
    res.redirect("https://forms.gle/Ko2Wa8qW7Hc4yC2c7");
});
app.get("/officer", function (req, res) {
    res.render("officer");
});
app.get('/contact', function (req, res) {
    res.redirect("https://forms.gle/QdFkYm3d7kGWHsDd8");
});
app.get('/join', function (req, res) {
    res.render('join');
});
app.get('/team', function (req, res) {
    res.render('team');
});
//TODO 404
app.listen(PORT, function () {
    console.log("DSC website listens on port " + PORT);
});
