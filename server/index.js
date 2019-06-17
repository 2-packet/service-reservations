require('newrelic');
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controllers = require('./controllers');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../public'), { maxAge: 31557600 }));

// app.get('/favicon.ico', (req, res) => res.status(204).send());

app.get('/:id', function handleId(req, res) {
    res.sendFile('index.html', { root: path.resolve(__dirname, '../public') });
});

app.get('/api/:id/reservations', function get(req, res) {
  controllers.find(req.params.id)
    .then(data => res.status(200).send(data.rows[0]))
    .catch(err => res.status(404).send(err));
});

app.put('/api/:id/reservations', (req, res) => {
  controllers.update(req.params.id, req.body)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(204).send(err));
});

app.post('/api/reservations', function post(req, res) {
  controllers.insert(req.body)
    .then(data => res.status(201).send(data))
    .catch(err => res.status(400).send(err));
});

app.delete('/api/:id/reservations', (req, res) => {
  controllers.remove(req.params.id) 
    .then(_ => res.status(204).send())
    .catch(err => res.status(405).send());
});

app.listen(port, () => console.log(`Listening on ${port}`));