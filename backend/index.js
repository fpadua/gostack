const express = require('express');

const app = express();

app.use(express.json());

app.get('/projects', (req, res) => {
  return res.json({message: 'ok'})
});
app.listen(3333, () => {
  console.log('Backend Iniciado.. :)');
});