const express = require('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');

const msg = require('./sendmail');

const port = process.env.PORT || 3100;


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())

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

app.post('/sendmail', (req, res) => {
    const bd = req.body;
    msg.receiving(bd)
    .catch(e => {
        console.log('ERROR', e);
    });

    res.send({done: 4, status: 200, 'message':"Holi"})
    
});
