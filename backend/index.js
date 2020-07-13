const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/projects', (req, res) => {
  return res.json({message: 'ok'})
});
app.listen(3333, () => {
  console.log('Backend Iniciado.. :)');
});