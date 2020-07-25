const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/projects', (req, res) => {
  return res.json([
    {id: 1, name: 'Projeto 1'},
    {id: 2, name: 'Projeto 2'},
    {id: 3, name: 'Projeto 3'},
    {id: 4, name: 'Projeto 4'},
    {id: 5, name: 'Projeto 5'},
    {id: 6, name: 'Projeto 6'},
    {id: 7, name: 'Projeto 7'},
    {id: 8, name: 'Projeto 8'},
    {id: 9, name: 'Projeto 9'},
    {id: 10, name: 'Projeto 10'},
    {id: 11, name: 'Projeto 11'},
    {id: 12, name: 'Projeto 12'},
    {id: 13, name: 'Projeto 13'},
    {id: 14, name: 'Projeto 14'},
    {id: 15, name: 'Projeto 15'},
  ])
});
app.listen(3333, () => {
  console.log('Backend Iniciado.. :)');
});