const HttpError = require("../errors/HttpError")
const booksModel = require("../models/booksModel")
const loansModel = require("../models/loansModel")

module.exports = {
  // GET /api/loans
  index: ( req, res ) => {
    const loans = loansModel.getAllLoans()
    res.json(loans)
  },

  // GET /api/loans/:id
  show: ( req, res ) => {
    const { id } = req.params
    const loan = loansModel.getLoanById(id)

    if(!loan) throw new HttpError(404, `empréstimo não encontrado!`)
      res.json(loan)
  },

  // POST /api/loans
  save: ( req, res ) => {
    const user = req.user
    const { bookId } = req.body
    const book = booksModel.getBookById(bookId)

    if(typeof bookId !== `string`) throw new HttpError(400, `Id de livro inválido`)
    if (!book) throw new HttpError(404, 'Livro não encontrado ')

    const newLoan = loansModel.createLoan(user, book)
    res.status(201).json(newLoan)
  },

  // POST /api/loans/:id/return
  return: ( req, res ) => {
    const { id } = req.params

    const loan = loansModel.returnLoan(id)
    res.json(loan)
  }
}