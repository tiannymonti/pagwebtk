const express = require('express');
const app = express();

const hbs = require('hbs');

const port = process.env.PORT || 3100;


app.use(express.static(__dirname + '/public'));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.render('index');
});

app.get('/productos', (req, res) => {
    res.render('productos');
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});

