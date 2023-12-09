const App = require("./App");

App.createUser("gabriel@email.com", "Gabriel Martins");
App.createUser("lucas@email.com", "Lucas Santos");
App.createUser("julio@email.com", "Julio Pontes");

App.deposit("gabriel@email.com", 100);

App.transfer("gabriel@email.com", "lucas@email.com", 20);

App.changeLoanFee(10)
App.takeLoan("julio@email.com", 2000, 24)

console.log(App.findUser("gabriel@email.com"));
console.log(App.findUser("gabriel@email.com").account);
console.log(App.findUser("lucas@email.com"));
console.log(App.findUser("lucas@email.com").account);
console.log(App.findUser("julio@email.com"));
console.log(App.findUser("julio@email.com").account);

console.log(App.findUser("gabriel@email.com").account.balance);