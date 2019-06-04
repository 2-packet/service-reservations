const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controllers = require('./controllers');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/:id', (req, res) => {
    res.sendFile('index.html', { root: path.resolve(__dirname, '../public') });
});

app.get('/api/:id/reservations', (req, res) => {
  controllers.find(req.params.id)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(404).send(err));
});

app.put('/api/:id/reservations', (req, res) => {
  controllers.update(req.params.id, req.body)
    .then(data => res.status(200).send(data))
    .catch(err => res.status(204).send(err));
});

app.post('/api/reservations', (req, res) => {
  controllers.insert(req.body)
    .then(data => res.status(201).send(data))
    .catch(err => res.status(400).send(err));
});

app.delete('/api/:id/reservations', (req, res) => {
  controllers.remove(req.params.id) 
    .then(_ => res.status(204).send())
    .catch(err => res.status(405).send());
});

app.listen(port, () => console.log(`Listening on port ${port}`));