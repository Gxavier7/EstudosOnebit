const Deposit = require("./classes/Deposit");
const Transfer = require("./classes/Transfer");
const User = require("./classes/User");
const Loan = require("./classes/Loan");

module.exports = class App {

  static #users = []; 

  static findUser (email) {
    const user = this.#users.find(user => user.email === email);
    return user ?? null;
  }

  static createUser (email, fullname) {
    const userExists = App.findUser(email)
    
    !userExists ? this.#users.push(new User(email, fullname)) : null;

    // if (!userExists) {
    //   this.#users.push(new User(email, fullname));
    // }
  }

  static deposit (email, value) {
    const user = App.findUser(email);

    if (user) {
      const newDeposit = new Deposit(value);
      user.account.addDeposit(newDeposit);
    }
  }

  static transfer (senderEmail, recieverEmail, value) {
    const fromUser = App.findUser(senderEmail);
    const toUser = App.findUser(recieverEmail);

    if (fromUser && toUser) {
      const newTransfer = new Transfer(fromUser, toUser, value);
      fromUser.account.addTransfer(newTransfer);
      toUser.account.addTransfer(newTransfer);
    }
  }

  static takeLoan (email, value, numberOfInstallments) {
    const user = App.findUser(email);

    if (user) {
      const newLoan = new Loan(value, numberOfInstallments)
      user.account.addLoan(newLoan);
    }
  }

  static changeLoanFee (newFeePercentage) {
    Loan.fee = newFeePercentage;
  }

}