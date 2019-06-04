const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const controllers = require('./controllers');
const app = express();
const port = 3020;

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/:id', (req, res) => {
    res.sendFile('index.html', { root: path.resolve(__dirname, '../public') });
});

app.get('/api/:id/reservations', (req, res) => {
  controllers.find(req.params.id)
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

app.put('/api/:id/reservations', (req, res) => {
  controllers.update(req.params.id, req.body)
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

app.post('/api/reservations', (req, res) => {
  controllers.insert(req.body)
    .then(data => res.send(data))
    .catch(err => res.send(err));
});

app.delete('/api/:id/reservations', (req, res) => {
  controllers.remove(req.params.id);
});

app.listen(port, () => console.log(`listening on port ${port}`));