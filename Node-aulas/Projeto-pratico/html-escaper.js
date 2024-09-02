const fs = require(`node:fs`)
const path = require(`node:path`)
const readline = require(`node:readline`)

run()

function escapeHtmlEspecialCharacters(text) {
  return text.replace(/[<>&]/g, match => {
    switch (match){
      case "<":
        return "&lt";
      
      case ">":
        return "&gt";

      case "&":
        return "&amp";
      
      default:
        return match;
    }
  })
}

function escapeHtmlFile(inputFilePath, outputFilePath) {
  try {

    const fileContent = fs.readFileSync(inputFilePath, "utf-8")
    const escapedContent = escapeHtmlEspecialCharacters(fileContent)

    fs.writeFileSync(outputFilePath, escapedContent, "utf-8")
    console.log(`Arquivo escapado com sucesso: ${outputFilePath}` );
    
  } catch (error) {

    console.log("Error:", error.message)
    process.exit(1)
  }
}

function askFilePath(question) {
  const rl = readline.createInterface({input: process.stdin, output: process.stdout})

  return new Promise((resolve) => {
    rl.question(question, answer => {
      resolve(answer)
      rl.close()
    })
  })
}

async function userInteraction () {
  let inputPath = process.argv[2]

  if (!inputPath) {
    inputPath = await askFilePath("Informe o caminho do arquivo de entrada: \n")
  }
  inputPath = path.resolve(inputPath)

  const defaultName = `escaped_${path.basename(inputPath)}.txt`
  const answer = await askFilePath(`Informe o caminho do arquivo de saida (padrão: ${defaultName}): \n`)

  let outputPath = answer.length > 0 ? answer : defaultName
  outputPath = path.resolve(outputPath)

  escapeHtmlFile(inputPath, outputPath)
}

function run() {
  if (process.argv.length >= 4) {
    escapeHtmlFile(
      path.resolve(process.argv[2]),
      path.resolve(process.resolve[3])
    )
  } else {
    console.log("---------------");
    console.log("HTML Tag Escaper v1.0");
    console.log("---------------\n");
    console.log("Argumentos não informados! Por Favor, informe os caminhos dos arquivos para realizar o escape.\n");
  }

  userInteraction()
}