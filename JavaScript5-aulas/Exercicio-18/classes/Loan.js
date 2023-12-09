const Installments = require("./Installments");

module.exports = class Loan {

  static #fee = 1.05;

  constructor (value, installments) {
    this.value = value;
    this.creationDate = new Date();
    this.installments = [];
    for (let i = 1; i <= installments; i++) {
      this.installments.push(new Installments( (value + Loan.#fee) / installments, i) )
    }
  }

  static get fee(){
    return Loan.#fee;
  }

  static set fee (newFeePercentage) {
    Loan.#fee = 1 + (newFeePercentage / 100);
  }

}