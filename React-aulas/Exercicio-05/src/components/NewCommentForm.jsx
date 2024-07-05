import { useState } from "react"
import TextInput from "./TextInput"

export default function NewCommentForm({addComment}) {
    const [mail, setMail] = useState("")
	const [message, setMessage] = useState("")

    const handleSubmit = (ev) => {
        ev.preventDefault()
        const date = new Date()

        addComment({mail, date, message})

        setMail("")
        setMessage("")
    }

    return(
        <form onSubmit={handleSubmit}>
            <TextInput id="mail" label="Email" value={mail} setValue={setMail} />
            <TextInput id="comment" label="Comentário" value={message} setValue={setMessage} />
            <button 
            type="submit"
            style={{"marginTop": ".5rem", "width": "300px"}}
            >Enviar Comentário</button>
        </form>
    )
}