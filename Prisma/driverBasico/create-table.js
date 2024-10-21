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

async function createTable() {
  await db.connect()

  const query = `
    CREATE TABLE IF NOT EXISTS "public"."Pokemon" (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      type VARCHAR(255)
    );
  `
  const result = await db.query(query)

  await db.end()
}