const express = require('express')
const gamesController = require('./controllers/games-controller')
const app = express()

app.use(express.json())

app.post('/', (req, res) => {
	res.json({ message: 'Hello, world!' })
})

app.get('/games', gamesController.index)
app.get('/games/:id', gamesController.show)

app.post('/games', gamesController.save)
app.post('/games/:id/genres', gamesController.addGenre)

app.put('/games/:id/update', gamesController.update)

app.delete('/games/:id', gamesController.delete)
app.delete('/games/:id/genres/:name', gamesController.deleteGenre)

const PORT = 3000
app.listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}/`))