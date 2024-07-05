import Card from "../public/components/Card"
import starWars1977 from "/posterStarWars1977.jpg"

function App() {

  return (
    <>
      <Card 
        imageUrl={starWars1977} 
        title="Poster Star Wars (1977)"
        textAbout="Um pôster decorativo épico do filme Star Wars, com moldura de MDF e
        tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de
        todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia
        de Star Wars para qualquer lugar que você decidir pendurar. Não perca
        a chance de adicionar essa linda memória ao seu acervo!"  
      />
    </>
  )
}

export default App
