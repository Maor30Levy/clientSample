const express = require('express');
const cors = require('cors');
const hbs = require('hbs');

const path = require('path');
const port = 3000;
const app = express();
const server = require('http').createServer(app);
app.use(express.json());
app.use(cors());

const publicDirectory = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);

app.use(express.static(publicDirectory));



app.get('', (req, res) => {
    res.render('index', {
        name: "Maor Levy",
        host: req.get('host')
    });
});


server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});