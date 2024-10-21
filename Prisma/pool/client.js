const pg = require('pg')

const client = new pg.Client({
  connectionString: "postgresql://postgress:senhaSecreta@localhost:5432/node_postgress"
})

async function openConnection() {
  await client.connect()

  const result = await client.query('SELECT 1+1 AS resultado;')

  setTimeout(() => {
    client.end()
    console.log(`Fechando conexão...`);    
  }, 5000)
}

openConnection