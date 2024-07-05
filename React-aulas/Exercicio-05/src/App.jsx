import { useState } from 'react'
import './App.css'
import NewCommentForm from './components/NewCommentForm'

function App() {

	const [comments, setComments] = useState(() => {
		const storageComments = localStorage.getItem("obc-comment-lib")
        if (!storageComments) return []
        return JSON.parse(storageComments)
    })

	const addComment = ({mail, date, message}) => {
        const id = Math.floor(Math.random() * 1000000) 
        const comment = {id, mail, date, message}
        setComments(state => {
            const newState = [...state, comment ]
            localStorage.setItem("obc-comment-lib", JSON.stringify(newState))
            return newState
        })
    }

	const removeComment = (id) => {
        setComments(state => {
            const newState = state.filter((comment) => comment.id !== id)
            localStorage.setItem("obc-comment-lib", JSON.stringify(newState))
            return newState
        })
    }

    return (
        <div style={{
			"backgroundColor" : "#eaeaea",
			"padding": "2rem",
		}}>
            <h2>Seção de Comentários</h2>
            <NewCommentForm addComment={addComment}/>

			<hr />

			{
				comments.length > 0 
				? comments.map((comment) => (
					<div style={{
						"display": "block",
						"textAlign": "start"
					}}>
						<h3 style={{"color":'#333', "margin": 0}}>{comment.mail}</h3>
						<p style={{"margin": 0}}>{comment.message}</p>
						<p style={{"margin": 0}}>Em {comment.date}</p>
						<button onClick={() => removeComment(comment.id)}>Remover</button>
					</div>
				))
				: <p style={{
					"display": "flex",
					"alignItems": "start",
					"flex-direction": "collumn",
				}}>Seja o primeiro a comentar!</p>
			}

        </div>
    )
}

export default App
