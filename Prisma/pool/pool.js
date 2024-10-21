const { Pool } = require("pg");

const pool = new Pool({
  connectionString: "postgresql://postgress:senhaSecreta@localhost:5432/node_postgress"
})

async function openConnection() {
  const client = await pool.connect()

  const result = await client.query(`SELECT 1+1 AS soma;`)
  console.log(result.rows);

  setTimeout(() => {
    client.release()
    console.log(`Fechando Pool..`);
  }, 5000);
}

openConnection()

setTimeout(() => {
  openConnection()
}, 1000);

setTimeout(() => {
  openConnection()
}, 2000);