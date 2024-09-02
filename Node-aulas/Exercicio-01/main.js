import fs from "node:fs"

const createFile = (filePath, text) => {
  fs.writeFile(filePath, text, "utf-8")
}

const readFile = (path) => {
  fs.readFile(path, "utf-8", (err, data) => {
    if (err) {
      console.log(err.message)
    }

    console.log(data)
  })
}

const changeFile = (filePath, data) =>{
  createFile(filePath, data)
}

const deleteFile = (filePath) => {
  fs.unlink(filePath, err => {
    if (err) console.log(err.message)
    console.log(`${filePath} was Deleted`)
  })
}

const espera = (func) => {
  
}

createFile("./arquivo.txt", "Olá mundo!")
setTimeout( () => {
  readFile("./arquivo.txt")
}, 2000)
setTimeout( () => {
  changeFile("./arquivo.txt", "Olá mundo mudado")
}, 3000)
setTimeout( () => {
  readFile("./arquivo.txt")
}, 4000)
setTimeout( () => {
  deleteFile("./arquivo.txt")
}, 6000)

