const express = require(`express`)

const app = express()

// Usado para definir uma pasta de arquivos estáticos
app.use(express.static(`public/assets`))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor Iniciado`))
