const path = require("node:path")

const dir = "src"
const file = "app.js"

const fullPath = path.join(__dirname, dir, file)
// fullPath = C:\Users\Teknisa\Documents\GitHub\EstudosOnebit\Node-aulas\paths\src\app.js

const relativePath = "../arquivos/relatorio.pdf"

const absolutePath = path.resolve(__dirname, relativePath)
// absolutePath = C:\Users\Teknisa\Documents\GitHub\EstudosOnebit\Node-aulas\arquivos\relatorio.pdf
// Voltou uma pasta antes de juntar os dois, devido ao ../ que tem no relativePath

const fileName = path.basename(relativePath)
// fileName = relatorio.pdf

const ext = path.extname(absolutePath)
// ext = .pdf