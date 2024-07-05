
import Bar from "../Bar/Index";
import Button from "../Button";
import styles from "./style.module.css";

export default function Profile({imageUrl, name, description, number, mail, gitHub, linkedln, twitter}) {
    return (
        <>
            <div className={styles.profileBox}>
                <img className={styles.image} src={imageUrl} alt={name} />
                <h2>{name}</h2>
                <Bar/>
                <p>{description}</p>
                <Bar/>
                <p>{number}</p>
                <Bar/>
                <p>{mail}</p>
                <Bar/>
                <div className={styles.buttons}>
                    <Button link = {gitHub} text="GitHub"/>
                    <Button link = {linkedln} text="Linkedln"/>
                    <Button link = {twitter} text="Twitter"/>
                </div>
            </div>
        </>
    )
}