const HttpError = require('../errors/HttpError')
const booksModel = require('./booksModel')

const uuid = require('uuid').v4

const loans = [
  {
    id: '1',
    userId: '1',
    bookId: '1',
    loanDate: new Date('2024-12-01'),
    returnDate: null,
    isReturned: false,
    isLate: true
  },
]

module.exports = {
  getAllLoans: () => loans,

  getLoanById: (id) => loans.find(loan => loan.id === id),

  createLoan: ( user, book ) => {
    if (book.quantityAvailable < 1) throw new HttpError(400, `Não há exemplares disponíveis`)

    const today = new Date()
    const returnDate = new Date()
    returnDate.setDate(today.getDate() + 14)

    const newLoan = {
      id: uuid(),
      userId: user.id,
      bookId: book.id,
      loanDate: today,
      returnDate: returnDate,
      isReturned: false,
      isLate: false
    }

    loans.push(newLoan)
    booksModel.takeBook(book.id)

    return newLoan
  },

  returnLoan: ( id ) => {
    const loan = loans.find( loan => loan.id === id )
    if ( !loan ) throw new HttpError(404, `Empréstimo não encontrado`)
    if ( loan.isReturned ) return null

    const limitDate = new Date(loan.returnDate)
    const today = new Date()
    
    loan.isReturned = true
    loan.isLate = today > limitDate
    loan.returnDate = today
    
    const book = booksModel.returnBook(loan.bookId)
    return loan
  }
}