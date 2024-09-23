const express = require(`express`)
const taskController = require("./controllers/tasksController")

const router = express.Router()

router.get(`/`, taskController.index)
router.get(`/taskList`, taskController.showList)
router.get(`/taskList/create`, taskController.create)
router.get(`/taskList/:id`, taskController.showTasks)
router.post(`/taskList/create`, taskController.createList)
router.post(`/taskList/delete/:id`, taskController.delete)
router.post(`/taskList/:listId/create`, taskController.createTask)
router.post(`/taskList/:listId/complete/:taskId`, taskController.completeTask)
router.post(`/taskList/:listId/delete/:taskId`, taskController.deleteTask)

module.exports = router