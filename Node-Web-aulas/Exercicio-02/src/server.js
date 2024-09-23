const path = require('node:path')
const express = require('express')
const process = require('node:process')
const router = require('./routes')

const app = express()

// Configurações do EJS
app.set(`view engine`, `ejs`)
app.set('views', path.join(__dirname, `views`))

// Configurações arquivos estáticos
app.use(express.static(`public`))

// Configuração interpretador das requisições
app.use(express.urlencoded({extended: true}))

// Configurações router
app.use(router)

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor rodando na porta http://localhost:${PORT}`))