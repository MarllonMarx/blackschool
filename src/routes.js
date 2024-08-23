const express = require('express')
const route = express.Router()
const cors = require('cors')

//REQUIRE - Controllers
const TurmaController = require('./controllers/TurmaController')
const UserController = require('./controllers/UserController')
const AtividadesController = require('./controllers/AtividadesController')

//Routes -> Controllers

route.options("*",cors)

//Endpoints -> TURMAS
route.get('/turmas', TurmaController.readyTurmas)//ROTA DE LISTAGEM DE TURMAS
route.post('/turma', TurmaController.createTurmas)//ROTA PARA CRIAR TURMAS
route.put('/turma/:id', TurmaController.updateTurmas)//ROTA PARA ATUALIZAR TURMAS
route.delete('/turmas/:id', TurmaController.deleteTurmas)//ROTA PARA DELETAR AS TURMAS

//Endpoints -> PROFESSORES
route.get('/usuarios',UserController.readyUser)//ROTA DE LISTAGEM DE USUÁRIOS
route.post('/usuario',UserController.createUser)//ROTA PARA CRIAR UM USUARIO
route.put('/usuario/email', UserController.updatePassUser)//ROTA PARA ATUALIZAR USUARIO

//Endpoints -> ATIVIDADES
route.get('/atividades',AtividadesController.searchAtividades)//ROTA DE LISTAGEM DE ATIVIDADES
route.post('/atividade',AtividadesController.createAtividades)//ROTA PARA CRIAR ATIVIDADES
route.put('/atividade/:id',AtividadesController.updateAtividades)//ROTA PARA ATUALIZAR ATIVIDADES
route.delete('/atividade/:id',AtividadesController.deleteAtividades)//ROTA PARA DELETAR AS ATIVIDADES

module.exports = route 