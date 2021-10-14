const express = require('express')
const app = express();
app.use(express.json());

const {todos, categories} = require('./data/data');

const getMaxId = require('./functions/getMaxId');
const getStatistics = require('./functions/getStatistics');
const validation = require('./validation/validation');
const {log} = require("nodemon/lib/utils");

const PORT = 4000;

let maxId = getMaxId(todos);

app.get('/notes/stats', (req, res) => {
  try {
    const result = getStatistics(todos, categories);
    res.status(200).json(result)
  } catch (e) {
    res.status(500).send('Server error');
  }
})

app.get('/notes/:id', validation(['id']), (req, res) => {
  try {
    const out = todos.filter(item => item.id === req.params.id)[0]
    out
      ? res.status(200).json(out)
      : res.status(404).send('Data not found');
  } catch (e) {
    res.status(500).send('Server error');
  }
})

app.get('/notes', (req, res) => {
  try {
    todos.length
      ? res.status(200).json(todos)
      : res.status(200).json([])
  } catch (e) {
    res.status(500).send('Server error');
  }
})

app.post('/notes', validation(['body']), (req, res) => {
  try {
    const newTodo = req.body;
    maxId += 1;
    newTodo.id = String(maxId);
    newTodo.active = true;
    newTodo.created = Date.now();
    todos.push(newTodo);
    res.status(200).json(todos);
  } catch (e) {
    res.status(500).send('Server error');
  }
})

app.delete('/notes/:id', validation(['id']), (req, res) => {
  try {
    let isDelete = false;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === req.params.id) {
        todos.splice(i, 1);
        isDelete = true;
        break;
      }
    }
    isDelete
      ? res.status(200).json(todos)
      : res.status(404).send('Data not found');
  } catch (e) {
    res.status(500).send('Server error');
  }
})

app.patch('/notes/:id', validation(['id', 'body']), (req, res) => {
  try {
    let isPatch = false;
    for (let i = 0; i < todos.length; i++) {
      if (todos[i].id === req.params.id) {
        todos[i] = {...todos[i], ...req.body};
        isPatch = true;
        break;
      }
    }
    isPatch
      ? res.status(200).json(todos)
      : res.status(404).send('Data not found');
  } catch (e) {
    res.status(500).send('Server error');
  }
})

app.use((req, res) => {
  res.status(404).send('Invalid url');
})

app.listen(PORT, (error) => {
    error
      ? console.log(error.message)
      : console.log('Server start on port: ', PORT, `link: http://localhost:${PORT}/`);
  }
);
