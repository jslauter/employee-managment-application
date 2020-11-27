const express = require("express")
const dotenv = require('dotenv')
const morgan = require('morgan')
const app = express()
const path = require('path')

dotenv.config({
  path: 'config.env'
})
const PORT = process.env.PORT || 8080

//log requests
app.use(morgan('dev'))

//GET
app.get("/", (req, res) => {
  res.render("index.ejs")
})

//Parsing
app.use(express.static("public"));
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());

//set views engine
app.set('view engine', 'ejs')

//load assets
app.use('/css', express.static(path.resolve(__dirname,'assets/css')))
app.use('/img', express.static(path.resolve(__dirname,'assets/img')))
app.use('/js', express.static(path.resolve(__dirname,'assets/js')))

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
})
