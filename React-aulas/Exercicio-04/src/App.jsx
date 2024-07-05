import { useState } from 'react'
import './App.css'

let passwordCharacters = [
"A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z",
"a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"!","@","#","$","%","^","&","*","(",")","_","-","+","<",">","/","?",":",";"
]

function App() {
  const [copyText, setCopyText] = useState("Copiar !")
  const [passwordGenerated, setPasswordGenerated] = useState()

  function generatePassword() {
    let password = ""

    for (let i = 0; i < 15; i++) {
      const randomIndex = Math.floor(Math.random() * passwordCharacters.length);
      password += passwordCharacters[randomIndex]
    }

    setPasswordGenerated(password)
  }

  function changeButtonText() {
    setCopyText("Copiado !")
    setTimeout(() => {
      setCopyText("Copiar !")
    }, 3000)
  }

  function copyToClipboard() {
    if (passwordGenerated) {
      navigator.clipboard.writeText(passwordGenerated)
    } else {
      alert("Gere uma senha antes de copiar!")
    }
  }

  return (
    <>
      <h1>Gerador de Senhas</h1>
      <div className="card">
        <button onClick={() => generatePassword()}>
          Gerar !
        </button>
        <button onClick={() => `${changeButtonText()} ${copyToClipboard()}`}>
          {copyText}
        </button>
        <p>
          {passwordGenerated}
        </p>
      </div>
    </>
  )
}

export default App
