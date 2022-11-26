const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

app.use(express.static(`${__dirname}/assets`));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Home page route
app.get('/', (req, res) => {
    res.sendFile(`${__dirname}/views/index.html`);
});
// Circle page route
app.get('/circle', (req, res) => {
    res.sendFile(`${__dirname}/views/circle.html`);
});
// Triangle page route
app.get('/triangle', (req, res) => {
    res.sendFile(`${__dirname}/views/triangle.html`);
});

// Triangle calculate route
app.post('/triangle', (req, res) => {
    const { height } = req.body;
    const { base } = req.body;
    const area = 0.5 * height * base;
    res.send(`<h1>Area of Triangle: ${area}</h1>`);
});

// Circle calculate route
app.post('/circle', (req, res) => {
    const { radius } = req.body;
    const area = 3.1416 * radius * radius;
    res.send(`<h1>Area of Circle: ${area}</h1>`);
});

app.listen(PORT, () => {
    console.log('Server Running Successfully');
    console.log(__dirname);
});
