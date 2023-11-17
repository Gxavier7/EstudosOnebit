class User {

  constructor( fullname, email, password) {

    this.fullname = fullname
    this.email = email
    this.password = password

  };

  login( email, password) {

    const comparision1 = this.comparision( email, this.email)
    const comparision2 = this.comparision( password, this.password)

    if (comparision1 && comparision2) {
      console.log(`Login bem sucedido`);
      
    }else{
      console.log(`Login falhou, tente novamente!`);
    }
  }

  comparision( item1, item2) {
    if (item1 == item2) {
      return true
    }else{
      return false
    }
  }

};

const gabriel = new User("Gabriel Martins Xavier", "gabrim0070@gmail.com", "teste123");

console.log(gabriel);

gabriel.login("gabrim0070@gmail.com", "teste123")