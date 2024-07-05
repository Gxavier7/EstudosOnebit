import Sections from "../public/components/Section"
import Header from "../public/components/header"


function App() {

  return (
    <>
      <Header/>
      <hr/>
      <Sections title="Crie interfaces de usuário de componentes">
        <p>React permite que você construa interfaces de usuário a partir de pedaços individuais chamados componentes</p>
      </Sections>
      <hr/>
      <Sections title="Escreva componentes com código e marcação">
        <p>Componentes React são funções JavaScrip. A sintaxe de marcação é chamada de JSX. É uma extensão da sintaxe JavaScript popularizada pelo React</p>
      </Sections>
      <hr/>
      <Sections title="Próximos Passos">
        <ul>
          <li>Uso de dados dinâmicos no JSX</li>
          <li>Criação de novos componentes</li>
          <li>Estilização de componentes</li>
          <li>Reutilização de componentes</li>
          <li>Uso de props e children</li>
          <li>Uso de eventos no JavaScript</li>
        </ul>
      </Sections>
    </>
  )
}

export default App
