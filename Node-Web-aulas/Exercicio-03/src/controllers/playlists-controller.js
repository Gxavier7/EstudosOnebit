let playlists = []

function generateRandomId() {
  return Math.floor(Math.random() * 9999999999)
}

module.exports = {
  // GET /playlists
  index: ( req, res ) => { 
    res.status(200).json(playlists)
  },

  // GET /playlists/:id
  show: ( req, res ) => {
    const { id } = req.params

    playlist = playlists.find( pl => pl.id === +id)

    if (!playlist) return res.status(404).json({ message: "Playlist Not Found"})

    res.status(200).json(playlist)
  },

  // POST /playlists
  save: ( req, res ) => {
    const { name, tags, musics } = req.body

    if (typeof name !== 'string') {
      return res.status(400).json({ message: 'name must be a string'})
    }

    if (!Array.isArray(tags)) {
      return res.status(400).json({ message: 'tags must be an array'})
    }

    const newPlaylist = {
      id: generateRandomId(),
      name: name,
      tags: tags,
      musics: musics ?? []
    }

    playlists.push(newPlaylist)
    res.status(201).json(newPlaylist)
  },

  // PUT /playlists/:id
  update: ( req, res ) => {
    const { id } = req.params
    const { name, tags, musics} = req.body

    const index = playlists.findIndex( pl => pl.id === +id)

    if (index == -1) return res.status(404).json("Playlist Not Found")

    if ( typeof name === 'string') {
      playlists[index].name = name
    }

    if ( tags && Array.isArray(tags) ) {
      playlists[index].tags = tags
    }

    res.json(playlists[index])
  },

  // DELETE /playlists/:id
  delete: ( req, res ) => {
    const { id } = req.params

    const index = playlists.findIndex( pl => pl.id === +id)

    if (index == -1) return res.status(404).json("Playlist Not Found")

    const deletedPlaylist = playlists.splice(index, 1)

    res.json(deletedPlaylist)
  },

  // POST /api/playlists/:id/musics
  addMusic: ( req, res ) => {
    const { title, year,artist, album } = req.body
    const { id } = req.params

    const playlist = playlists.find (pl => pl.id === +id)

    if (!playlist) return res.status(404).json("Playlist Not Found")

    if ( typeof title !== 'string' || typeof year !== 'number' || typeof artist !== 'string' || typeof album !== 'string'){
      return res.status(400).json({ message: "invalid fields" })
    }

    const newMusic = {
      id: generateRandomId(),
      title,
      year,
      artist,
      album
    }

    playlist.musics.push(newMusic)

    res.status(200).json(playlist)
  },

  // DELETE /api/playlists/:id/musics/:musicId
  removeMusic: ( req, res ) => {
    const { id, musicId } = req.params

    const playlist = playlists.find(pl => pl.id === +id)

    if (!playlist) return res.status(404).json("Playlist Not Found")

    playlist.musics = playlist.musics.filter(music => music.id !== +musicId)

    res.status(204).end()
  }
}