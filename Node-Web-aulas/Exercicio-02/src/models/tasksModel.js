let tasksList = [{ id: `1`, title: `Teste`, tasks:[{ id: `1`, title: "Limpar Quarto", complete: false}, { id: `2`, title: "Limpar Sala", complete: true}]},
{ id: `2`, title: `Testado`, tasks:[{ id: `1`, title: "Limpar Quarto", complete: false}]}]

// Tasks List [{ id, title, tasks:[ {id, title, complete}, {}, {} ] }, {}, {}, {}]

const taskModel = {
  getAllTasksList () {
    return tasksList
  },

  getTasks (id) {
    let task = tasksList.find(task => task.id === id)
    return task
  },

  createTaskList ( title ) {
    const taskList = {
      id: Math.floor(Math.random() * 1000000).toString(),
      title: title,
      tasks: []
    }

    tasksList.push(taskList)

    return taskList
  },

  createTask ( id, title ) {
    let taskList = tasksList.find(e => e.id === id)

    const task = {
      id: Math.floor(Math.random() * 10000000).toString(),
      title: title,
      complete: false
    }

    taskList.tasks.unshift(task)
  },

  completeTask ( listId, taskId ) {
    let taskList = tasksList.find(e => e.id === listId)

    let index = taskList.tasks.findIndex(e => e.id === taskId)

    taskList.tasks[index] = { ...taskList.tasks[index], complete: !taskList.tasks[index].complete }

    let item = taskList.tasks.splice(index, 1)[0];

    console.log(item)
    if (item.complete) taskList.tasks.push(item);
    else taskList.tasks.unshift(item)
  },

  deleteTaskList ( id ) {
    tasksList = tasksList.filter( task => task.id !== id)
  },

  deleteTask ( listId, taskId ) {
    let taskList = tasksList.find( task => task.id == listId)

    taskList.tasks = taskList.tasks.filter( task => task.id !== taskId)
  },
}

module.exports = taskModel