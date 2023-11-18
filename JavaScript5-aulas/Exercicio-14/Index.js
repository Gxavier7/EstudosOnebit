const Author = require("./Author");


const john = new Author("john");

const post = john.addPost("Teste", "Apenas um teste");
post.addComment(john.name, "Funcionou")

console.log(john);
console.log(post);
