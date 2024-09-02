const fs = require("node:fs")

let streamLeitura = fs.createReadStream("arquivo.txt")

let buffer = []

streamLeitura.on("data", (chunk) => {
  buffer.push(chunk)
  console.log("Um chunk foi processado.")
})

streamLeitura.on("end", () => {
  console.log("Buffer: \n", buffer);
  const dadosCompletos = Buffer.concat(buffer).toString()
  console.log("Dados Lidos: \n", dadosCompletos);
})

const streamVisualizacao = fs.createReadStream("images.jpg")

const buffer2 = []

streamVisualizacao.on("data", (chunk) => {
  buffer2.push(chunk)
  console.log("Um chunk foi processado.")
})

streamVisualizacao.on("end", () => {
  console.log("Buffer: \n", buffer2);
})