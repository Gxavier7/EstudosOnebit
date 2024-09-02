const os = require("node:os")

const plataforma = os.platform()
console.log("Plataforma do OS:", plataforma);

const arquitetura = os.arch()
console.log("Arquitetura do SO", arquitetura);

const processador = os.cpus()
console.log("Informações da CPU", processador[0]);

const memoria = os.totalmem()
console.log("Total de memória:", Math.floor(memoria / 1024 / 1024 / 1024));

const memoriaLivre = os.freemem()
console.log("Total de memória:", Math.floor(memoriaLivre / 1024 / 1024 / 1024));