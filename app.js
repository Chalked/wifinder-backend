const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const app = express();
const port = parseInt(process.env.PORT || 3000);
const cors = require('cors');
const queries = require('./queries.js');

app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());

app.get('/hello', (req, res) => {
    res.json({ message: 'Hello World!'});
});

app.get('/locations/', (req, res) => {
    queries
        .list()
        .then(records => {
            res.json(records);
        })
        .catch(err => {
            res.json({ error: err });
        });
});

app.get('/comments/', (req, res) => {
    queries
        .listComments()
        .then(records => {
            res.json(records);
        })
        .catch(err => {
            res.json({ error: err });
        });
});

app.get('/locations/:id', (req, res) => {
    queries
        .read(req.params.id)
        .then(records => {
            res.json(records);
        })
        .catch(err => {
            res.json({ error: err });
        });
});

app.get('/comments/:id', (req, res) => {
    queries
        .readComments(req.params.id)
        .then(records => {
            res.json(records);
        })
        .catch(err => {
            res.json({ error: err });
        });
});


app.listen(port)
  .on('error',     console.error.bind(console))
  .on('listening', console.log.bind(console, 'Listening on ' + port));

module.exports = app;