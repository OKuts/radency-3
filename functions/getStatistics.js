const getStatistics = (todos, categories) => {
  const statistics = {...categories};
  Object.keys(statistics).forEach(cat => {
    statistics[cat].total = 0;
    statistics[cat].active = 0;
    todos.forEach(todo => {
      if (cat === todo.categoryId) {
        statistics[cat].total += 1;
        if (todo.active) statistics[cat].active += 1;
      }
    })
  })

  return statistics;
}

module.exports = getStatistics;
