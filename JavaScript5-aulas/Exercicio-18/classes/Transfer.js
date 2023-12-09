module.exports = class Transfer {

  constructor (sender, reciever, value ) {
    this.value = value;
    this.sender = sender;
    this.reciever = reciever; 
    this.createdAt = new Date();
  }

}