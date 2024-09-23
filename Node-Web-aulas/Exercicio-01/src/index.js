const express = require('express');
const path = require('node:path');

const app = express();
let storageMails = [];

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Usado para definir uma pasta de arquivos estáticos
app.use(express.static('public'));

// Configurações do body
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('homepage');
});

app.post('/registrar', (req, res) => {
  const { mail } = req.body;
  
  if (mail) { // Verifica se 'mail' não é vazio ou undefined
    storageMails.push({ mail }); // Armazena apenas o valor de 'mail'
    console.log(storageMails);
    res.redirect('/sucesso');
  } else {
    console.log('Erro ao salvar, campo vazio');
    res.redirect('/'); // Redireciona para a homepage em caso de erro
  }
});

app.get('/sucesso', (req, res) => {
  res.render('successRegister');
});

app.get('/lista', (req, res) => {
  res.render('emails', { mail: storageMails });
});

app.post('/lista/delete', (req, res) => {
  const { email } = req.body;

  if (email) {
    storageMails = storageMails.filter(item => item.mail !== email);
  }

  res.redirect('/lista');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta: http://localhost:${PORT}`);
});
