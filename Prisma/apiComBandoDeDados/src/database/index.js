const { Pool } = require(`pg`)

const pool = new Pool({ connectionString: "postgresql://postgress:senhaSecreta@localhost:5432/node_postgress" })

async function query(queryString, params, callback) {
  return pool.query(queryString, params, callback)
}

module.exports = { query }