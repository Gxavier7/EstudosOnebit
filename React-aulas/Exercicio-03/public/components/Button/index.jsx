import style from "./style.module.css";

export default function Button(props) {
    return (
        <>
            <button className={style.button}>
                <a className={style.text} href={props.link} target="_blank" rel="noopener noreferrer">
                    {props.text}
                </a>
            </button>
        </>
    )
}