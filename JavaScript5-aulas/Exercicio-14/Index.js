const Author = require("./Author");


const john = new Author("john");

john.addPost("Teste", "Apenas um teste");
john.posts[0].addComment(john.name, "Funcionou")

console.log(john);
console.log(john.posts[0].comments[0]);