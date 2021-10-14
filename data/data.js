const categories = {
  0: {
    name: 'Task',
    icon: 'fas fa-head-side-virus',
  },
  1: {
    name: 'Random Thought',
    icon: 'fas fa-exclamation-circle',
  },
  2: {
    name: 'Idea',
    icon: 'fas fa-laptop-code',
  },
};

const todos = [
  {
    id: '1',
    name: 'Shoping list',
    created: 1633670000000,
    categoryId: '0',
    content: 'Tomatoes, bread',
    active: true,
  },
  {
    id: '2',
    name: 'New Feature',
    created: 1633000060000,
    categoryId: '1',
    content: '',
    active: false,
  },
  {
    id: '3',
    name: 'Books',
    created: 1630000066048,
    categoryId: '2',
    content: 'The theory of evolut 1/08/2021y and 22/5/2015',
    active: true,
  },
  {
    id: '4',
    name: 'Shoping list',
    created: 1633670000001,
    categoryId: '0',
    content: 'There is no need to implement data storage. Simply create a JS variable which stores the data and prepopulate it with 7',
    active: true,
  },
  {
    id: '5',
    name: 'Sometimes',
    created: 1633000060001,
    categoryId: '1',
    content: ' For example, for a note “I’m gonna have a dentist appointment on the 3/5/2021, I moved it from 5/5/2021”',
    active: false,
  },
  {
    id: '6',
    name: 'Books',
    created: 1630000066049,
    categoryId: '2',
    content: 'The theory of evolut 1/08/2021y and 22/5/2015',
    active: true,
  },
  {
    id: '7',
    name: 'Mashine',
    created: 1630000066044,
    categoryId: '0',
    content: 'The theory of evolut 1/08/2021y and 18/5/2015',
    active: true,
  },
]

module.exports = {
  todos,
  categories,
};
