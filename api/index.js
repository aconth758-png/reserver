const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    status: 'success',
    version: '1.0.0',
    message: 'Vinzz AI API ready',
    endpoints: ['/ping', '/custom'],
    timestamp: new Date().toISOString()
  });
});

app.post('/', (req, res) => {
  res.json({
    status: 'ok',
    received: req.body,
    note: 'Vinzz AI menerima POST'
  });
});

module.exports = app;
