const fs = require("node:fs")
const path = require("node:path")
const readline = require("node:readline")

const notesFolderPath = path.join(__dirname, "notes")

const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

function createNotesFolder () {  
  if (!fs.existsSync(notesFolderPath)) {
    fs.mkdirSync(notesFolderPath)
  }
}

function createNote() {
  rl.question("Digite o nome da nota: \n", noteName => {
    const notePath = path.join(notesFolderPath, noteName)

    rl.question("Digite o conteudo da nota: \n", (content) => {
      fs.writeFileSync(notePath + ".txt", content, "utf-8")
      console.log(`Nota ${noteName} foi criada com sucesso!`);
      
      askforNextAction()
    })
  })
  
}

function listNotes () {
  const notes = fs.readdirSync(notesFolderPath)

  if ( notes.length === 0 ) {
    console.log("Nenhuma nota encontrada");
  } else{ 
    console.log("Notas Salvas: \n");
    notes.forEach((note, index) => {
      console.log(`${index + 1}. ${note}`);
    })
  }
}

function readNote() {
  listNotes()

  rl.question("Digite o número da nota que deseja ler:", (index) => {
    const notes = fs.readdirSync(notesFolderPath)
    const selectedNote = notes[index - 1]

    if (!selectedNote) {
      console.log("Número da nota inválida")
    } else { 
      const notePath = path.join(notesFolderPath, selectedNote)
      const content = fs.readFileSync(notePath, "utf-8")

      console.log(`Conteúdo da nota ${selectedNote}:\n\n${content}`)
    }

    askforNextAction()
  })
}

function deleteNote() {
  listNotes()

  rl.question(`Digite o número da nota que deseja excluir:`, index => {
    const notes = fs.readdirSync(notesDirectory)
    const selectedNote = notes[index - 1]
    
    if (!selectedNote) {
      console.log(`Número da nota inválido!`)
    } else {
      const notePath = path.join(notesDirectory, selectedNote)
      fs.unlinkSync(notePath)
      console.log(`Nota ${selectedNote} excluida com sucesso`)
    }

    askforNextAction()
  })
}

function askforNextAction () {
  rl.question("\nDeseja realizar outra ação? (s/n): ", answer => {
    if (answer.toLowerCase == "s") {
      menu()
    } else {
      console.log("Encerrando o programa");
      rl.close()
      process.exit(0)
    }
  })
}

function menu () {
  createNotesFolder()

  console.clear()

  console.log("---------------------")
  console.log("Notas Rapidas no Terminal")
  console.log("---------------------\n")


  console.log("\n---------------------")
  console.log("Gerenciador de notas")
  console.log("1 - Criar Anotação")
  console.log("2 - Listar Anotações")
  console.log("3 - Ler Anotação")
  console.log("4 - Excluir uma nota")
  console.log("5 - Sair")
  console.log("---------------------\n")

  rl.question("Selecione uma das opções: ", (answer) => {
    switch (parseInt(answer)) {
      case 1:
        createNote()
        break;
      case 2:
        listNotes()
        askforNextAction()
        break;
      case 3:
        readNote()
        break;
      case 4:
        deleteNote()
        break;
      case 5:
        console.log("Saindo...");
        rl.close()
        process.exit(0)        
      break;
      default:
        console.log("Opção Inválida!")
      break
    }

  })
}

menu()