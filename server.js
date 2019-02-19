require('./config/config');

const express = require('express');
const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');

const msg = require('./src/sendmail');
const ls = require('./src/logsaver');

const port = process.env.PORT;


app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json())

// Express HBS engine
hbs.registerPartials(__dirname + '/views/parciales');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {
    res.status(200);
    res.render('index', {
        entorno: process.env.NODE_ENV === 'dev' ? true : false
    });
});

app.get('/productos', (req, res) => {
    res.status(200);
    res.render('productos', {
        entorno: process.env.NODE_ENV === 'dev' ? true : false
    });
});

app.listen(port, () => {
    console.log(`Escuchando peticiones en el puerto ${ port }`);
});

app.post('/sendmail', (req, res) => {
    const bd = req.body;
    msg.receiving(bd)
    .then(v => {
        const timeStmp = new Date().toLocaleDateString();
        ls.writeLogs(bd, `./logcontactos/contacto-${timeStmp}.txt`);
        res.send({done: 4, status: 200, 'message':"Email sent"});
    })
    .catch(e => {
        console.error(e);
        res.status(500).send({done: 4, status: 500, 'message':e});
    });
});

module.exports = {app};