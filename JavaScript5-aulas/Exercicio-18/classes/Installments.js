module.exports = class Installments {

  constructor (value, number, status = 'pending') {
    this.value = value;
    this.number = number;
    this.status = status;
  }

}