import express from "express"
import { sequelize } from "./database"

const app = express()

const PORT = process.env.PORT || 3000 

app.listen( PORT, () => {
  sequelize.authenticate().then( () => {
    console.log(`DB connection seccessfull`)
  })
  console.log(`Server started successfuly at port https://localhost:${PORT}`);
})