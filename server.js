const express = require ("express")
const dotenv = require('dotenv')
const morgan = require('morgan')
const app = express()

dotenv.config({path:'config.env'})
const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('dev'))

app.get("/", (req, res) => {
  res.send("App running")
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})
