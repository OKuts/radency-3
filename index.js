const express = require('express')
const app = express();
app.use(express.json());

const {todos, categories} = require('./data/data');
const getMaxId = require('./functions/getMaxId');
const getStatistics = require('./functions/getStatistics');
const validation = require('./validation/validation');

const PORT = 4000;

let maxId = getMaxId(todos);

app.get('/notes/stats', (req, res) => {
  const result = getStatistics(todos, categories);
  res.status(200).json(result).end();
})

app.get('/notes/:id', validation(['id']), (req, res) => {
  const out = todos.filter(item => item.id === req.params.id)[0]
  res.status(200).json(out).end();
})

app.get('/notes', (req, res) => {
  res.status(200).json(todos).end();
})

app.post('/notes', validation(['body']), (req, res) => {
  const newTodo = req.body;
  maxId += 1;
  newTodo.id = String(maxId);
  newTodo.active = true;
  newTodo.created = Date.now();
  todos.push(newTodo);
  res.status(200).json(todos).end();
})

app.delete('/notes/:id', validation(['id']), (req, res) => {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === req.params.id) {
      todos.splice(i, 1);
      break;
    }
  }
  res.status(200).json(todos).end();
})

app.patch('/notes/:id', validation(['id', 'body']), (req, res) => {
  for (let i = 0; i < todos.length; i++) {
    if (todos[i].id === req.params.id) {
      todos[i] = {...todos[i], ...req.body};
      break;
    }
  }
  res.status(200).json(todos).end();
})


app.listen(PORT, () =>
  console.log('Server start on port: ', PORT, `link: http://localhost:${PORT}/`)
);
