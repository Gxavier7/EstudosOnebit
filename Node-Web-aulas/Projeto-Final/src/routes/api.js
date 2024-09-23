const express = require(`express`)
const booksController = require("../controllers/booksController")
const { ensureAuth } = require("../middlewares/authMiddleware")
const loansController = require("../controllers/loansController")
const apiRouter = express.Router()

apiRouter.get(`/books`, booksController.index)
apiRouter.get(`/books/:id`, booksController.show)
apiRouter.get(`/loans`, loansController.index)
apiRouter.get(`/loans/:id`, loansController.show)

apiRouter.post(`/books`, booksController.save)
apiRouter.post(`/loans`, ensureAuth, loansController.save)
apiRouter.post(`/loans/:id/return`, loansController.save)

apiRouter.put(`/books/:id`, booksController.update)

apiRouter.delete(`/books/:id`, booksController.delete)

module.exports = apiRouter