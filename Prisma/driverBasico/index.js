const pg = require('pg')

const db = new pg.Client({
  host: "localhost",
  port: 5432,
  user: "postgress",
  password: "senhaSecreta",
  database: "node_postgress"

  /*
  OU

  connectionString: "postgresql://postgress:senhaSecreta@localhost:5432/node_postgress"

  que segue o formato protocolo://usuario:senha@host:porta/nome_do_banco
  */
})

async function insertPokemon () {
  await db.connect();

  // Forma básica
  const query = `
    INSERT INTO "public"."Pokemon" (name, type) VALUES ('Sprigatito', 'Grass')
  `
  const result1 = await db.query(query)

  // Dados dinâmicos da forma ERRADA, pois permite a inserção de códigos maliciosos
  /*
  const name = "Fuecoco"
  const type = "Fire"
  const result2 = await db.query (`INSERT INTO "Pokemon" (name, type) VALUES ('$name', '${type}');`)
  */


  // Dados dinãmicos da forma CORRETA, validando assim os valores que são inseridos
  /*
    const pokemon = { name: "Quaxly", type: "Água" }
    const result3 = await db.query(
      `INSERT INTO "Pokemon" (name, type) VALUES ($1, $2);`,
      [pokemon.name, pokemon.type]
    )
  */



  await db.end()
}