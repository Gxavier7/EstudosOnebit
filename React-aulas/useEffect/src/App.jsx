import { useEffect, useState } from "react"

function Counter () {
  const [counter, setCounter] = useState(0)
  
  useEffect(() => {
    console.log('Efeito ativado')

    return () => {
      console.log("Fazendo a limpeza")
      console.log("Componente desmontado")
    }
  }, [])

  return (
    <>
      <button onClick={() => {setCounter(counter + 1)}}>
        Contador: {counter}
      </button>
    </>
  )
}

export default function App () {
  const [counter2, setCounter2] = useState(0)
  const [show, setShow] = useState(false)


  return (
    <>
      <h1>Conhecendo o use Effect</h1>
      <div>
        <input 
          type="checkbox" 
          id="show"
          value={show} 
          onChange={() => setShow(state => !state)} />
        <label htmlFor="show">Mostrar Contador</label>
      </div>
      {
        show ? <Counter/> : null
      }
      <hr />
      <button onClick={() => {setCounter2(count => count + 1)}}>
        Contador: {counter2}
      </button>
    </>
  )
}