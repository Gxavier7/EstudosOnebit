class Account{

  #password
  #balance = 0

  constructor (user) {
    this.email = user.email;
    // Para criar uma instância privada
    this.#password = user.password;
  }

  getBalance(email, password){
    if(this.#autenticate(email, password)){
      return this.#balance;

    }else{
      return null;
    }
  }

  #autenticate(email, password){
    return this.email === email & this.#password === password;
  }

}

const user = {
  email: "teste@email.com",
  password: "senha",
}

const myAccount = new Account(user);

console.log(myAccount);