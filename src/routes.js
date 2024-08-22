const express = require('express')
const route = express.Router()
const cors = require('cors')
const TurmaController = require('./controllers/TurmaController')

//Routes -> Controller

route.options("*",cors)

//Endpoints -> ALUNOS
route.get('/turmas', TurmaController.readyTurmas)//ROTA DE LISTAGEM DE TURMAS
route.post('/turma', TurmaController.createTurmas)//ROTA PARA CRIAR TURMAS
route.put('/turma/:id', TurmaController.updateTurmas)//ROTA
route.delete('/turmas/:id', TurmaController.deleteTurmas)//ROTA

module.exports = route 