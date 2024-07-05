import reactLogo from '/react.png'

function Header() {

  return (
    <>
        <img src={reactLogo} alt="Logo React" />
        <h1>React</h1>
        <p>A biblioteca para interfaces de usuário web e nativas</p>
        <button>Aprenda react</button>
        <button>Referência da API</button>
    </>
  )
}

export default Header
