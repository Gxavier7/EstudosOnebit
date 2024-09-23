const taskModel = require("../models/tasksModel")


const taskController = {
  // GET /
  index: (req, res) => {
    res.render('index')
  },

  // GET /tasksList
  showList: (req, res) => {
    const tasksList = taskModel.getAllTasksList()

    res.render('taskList', {tasksList})
  },
  
  // GET /taskList/create
  create: (req, res) => {
    res.render('newList')
  },
  
  // GET /taskList/:id
  showTasks: (req, res) => {
    const taskList = taskModel.getTasks(req.params.id)

    res.render('tasks', { taskList })
  },
  
  // POST /taskList/create
  createList: (req, res) => {
    const { title } = req.body

    const list = taskModel.createTaskList(title)

    res.redirect(`/taskList/${list.id}`)
  },
  
  // POST /taskList/delete/:id
  delete: (req, res) => {
    taskModel.deleteTaskList(req.params.id)

    res.redirect(`/taskList`)
  },
  
  // POST /taskList/:listId/create
  createTask: (req, res) => {
    const { title } = req.body

    taskModel.createTask(req.params.listId, title)

    res.redirect(`/taskList/${req.params.listId}`)
  },
  
  // POST /taskList/:listId/complete/:taskId
  completeTask: (req, res) => {
    taskModel.completeTask(req.params.listId, req.params.taskId)

    res.redirect(`/taskList/${req.params.listId}`)
  },
  
  // POST /taskList/:listId/delete/:taskId
  deleteTask: (req, res) => {
    taskModel.deleteTask(req.params.listId, req.params.taskId)

    res.redirect(`/taskList/${req.params.listId}`)
  },
}

module.exports = taskController