import Button from "../Button"
import style from "./style.module.css" 

function Card(props) {
    return (
        <>
            <div className={style.cardContainer}>
                <div >
                    <img src={props.imageUrl} alt={props.title} className={style.cardImage}/>
                </div>
                <div className={style.textContent}>
                    <h1 className={style.title}>
                        Pôster: {props.title}
                    </h1>
                    <p className={style.textAbout}>
                        {props.textAbout}
                    </p>
                    <Button text="Comprar agora"/>
                </div>
            </div>
        </>
    )
}

export default Card