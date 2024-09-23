const express = require('express')
const path = require('node:path')

const app = express()
const storedUsers = []

// configurações do EJS
app.set(`view engine`, "ejs")
app.set("views", path.join(__dirname, 'views'))

// Configurações do body
app.use( express.urlencoded({extended: true}) )

// Rotas
app.get('/', (req, res) => {
  const title = 'HomePage'
  const message = 'Mensagem inserida dinamicamente pelo EJS'

  res.render(`index`, {title, message})
})

app.get('/form', (req, res) => {
  

  res.render(`form`)
})

app.post('/register', (req, res) => {
  const username = req.body.username

  storedUsers.push({username})

  res.redirect('/usuarios')
})

app.get(`/usuarios`, (req, res) => {
  res.render(`users`, {users: storedUsers})
})

const PORT = 3000
app.listen(PORT, () => console.log("Servidor Iniciado"))