import image from "/cardImage.jpg";
import style from './styles/card.module.css'

export default function Card() {
  return (
    <div className={style.card}>
      <img src={image} alt="capa" className={style.image}/>
      <div className={style.text}>
        <h2 className={style.cardHeader}>Pôster Star Wars (1977)</h2>
        <p>Um poster decorativo épico do filme Star Wars, com moldura de MDF e tamanho A3. Uma ótima recordação de um dos mais icônicos filmes de todos os tempos. Este clássico pôster trará aventura, nostalgia e a magia de Star Wars para qualquer lugar que você decicir pendurar. Não perca a chance de adicionar essa linda memória ao seu acervo!</p>
        <button className={style.cardButton}>Comprar agora</button>
      </div>
    </div>
  )
}   