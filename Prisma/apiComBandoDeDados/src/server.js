const express = require('express')
const router = require('./router')

const app = express()
const PORT = 3000

app.use(express.json())
app.use(`/api`, router)

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: http://localhost:${PORT}`);
});