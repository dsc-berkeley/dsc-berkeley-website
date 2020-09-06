require(`dotenv`).config();

import express from 'express';
import bodyParser from "body-parser";

const PORT = process.env.PORT;

const app = express();

//Public
app.use(express.static(`./src/public`));

//Views
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.set('views', './src/views');

//body parsing
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//Routes and handlers
app.get(`/`, (req, res) => {
   res.render(`index.html`);
})

app.get(`/sign-up`, (req, res) => {
   res.redirect(`https://forms.gle/Ko2Wa8qW7Hc4yC2c7`);
});

//TODO 404

app.listen(PORT, () => {
   console.log(`DSC website listens on port ${PORT}`);
});