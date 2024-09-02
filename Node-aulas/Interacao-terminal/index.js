// Processo para saida e entrada de dados
/*
process.stdout.write("Olá, Mundo!")

process.stdin.on("data", (data) => {
  process.stdout.write(`Você Digitou ${data}`)
})
*/

const readline = require("node:readline")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

rl.once("line", (input) => {
  rl.write(`Você digitou : ${input}\n`)
})

rl.question("Qual o seu nome\n", (answer) => {
  rl.write(`Olá, ${answer}! \n`)
  rl.close()
})