const express = require('express')
const route = express.Router()
const alunoController = require("./controllers/alunocontroller")

const cors = require('cors')

//Routes -> Controller

route.options("*",cors)

//Endpoints -> ALUNOS
route.get('/listaalunos', alunoController.readyAlunos)//ROTA DE LISTAGEM DE ALUNOS

module.exports = route 