const os = require("node:os")
const fs = require("node:fs")
const path = require("node:path")

const exists = fs.existsSync(path.resolve(__dirname, "log"))

if (!exists) {
  fs.mkdirSync(path.resolve(__dirname, "log"))
  console.log("testando");
}

function getDetails() {
  const SoName = os.platform()
  const SoArchiteture = os.arch()
  const SoCpu = os.cpus()[0].model
  const SoActivityTime = os.uptime()  
  const SoMemoryTotal = os.totalmem()
  const SoFreeMemory = os.freemem()
  
  return `A plataforma do Sistema Operaciona é: ${SoName} \nA arquitetura do Sistema Operacional é: ${SoArchiteture} \nO modelo do processador é: ${SoCpu} \nO Tempo de atividade do Sistema é: ${(SoActivityTime / 60 / 60).toFixed(1)} \n O uso de memória é de: ${((SoMemoryTotal - SoFreeMemory) / 1024 / 1024 / 1024).toFixed(1)} GB\n` 
}

async function startMonitor () {
  const logPath = path.resolve(__dirname, "log/log.txt")

  setInterval(() =>{
    const newData = `\n${getDetails()}`

    console.log(newData)

    fs.appendFileSync(logPath, newData)
  }, 1000)
}

startMonitor()