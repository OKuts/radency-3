const getMaxId = (todos) => {
  let maxId = 1;
  todos.forEach(item => {
    if (Number(item.id) > maxId) maxId = Number(item.id)
  })
  return maxId;
}

module.exports = getMaxId;
