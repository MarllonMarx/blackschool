require('dotenv').config({path: "variaveis.env"})

const express = require('express')
const cors = require ('cors')
const bodyParser = require('body-parser')
const routes = require('./routes.js')

const server = express()

server.use(bodyParser.urlencoded({extended:false}))
server.use(bodyParser.json())
server.use("/blackschool",routes)
server.use(cors())

server.get("/teste",(req,res) => res.send("Rota funcionando!"))

server.listen(process.env.PORT,() => {
    console.log("Server ligado na porta " + `http://localhost:${process.env.PORT}`)
})