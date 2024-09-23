const express = require('express')
const path = require('node:path')
const process = require(`node:process`)
const router = require('./routes')

const app = express()

// Configuração EJS
app.set(`view engine`, `ejs`)
app.set(`views`, path.join(__dirname, `views`))

// Configuração de arquivos estáticos
app.use(express.static('public'))

// Configuração para ler dadeos da requisição
app.use(express.urlencoded({extended: true}))

// Rotas da aplicação
app.use(router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor iniciado" \n Rodando em http://localhost:${PORT}/`))