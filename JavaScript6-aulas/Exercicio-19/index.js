const button = document.getElementById("buttonSubmit");
const email = document.getElementById("email");
const password = document.getElementById("password");

function verifyEmail (email) {

  if (!email.match(/\w+(?=@)@(?<=@)\w+\.(?<=\.)\w+/i)) {
    const err = new Error("E-mail inválido")
    throw err
  }
  
}

function verifyPassword (password) {

  if (
    !password.match(/[a-z]/) ||
    !password.match(/[A-Z]/) ||
    !password.match(/\d/) ||
    !password.match(/\W/) ||
    password.length < 8
  ) {
    const err = new Error("Senha inválida")
    throw err
  }

}

function verifyLogin () {

  try {

    verifyEmail(email.value);
    verifyPassword(password.value);
    alert('Tudo certo por aqui')
    
  } catch (err) {
    alert(err.message);
  }


}

button.addEventListener('click', () => verifyLogin())