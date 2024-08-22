const { response } = require("express");
const TurmaServices = require("../services/TurmaServices");

module.exports = {

    readyTurmas: async (request, response) => {
        let json = { error: "", result: [] }

        let turmas = await TurmaServices.searchTurmas()

        for (let i in turmas) {
            json.result.push({
                id: turmas[i].id,
                nome: turmas[i].nome,
                periodo_letivo: turmas[i].periodo_letivo
            })
        }
        response.header("Access-Control-Allow-Origin", "*")

        if (json.result.length == 0) {
            response.status(200).json({
                message: "Nenhuma instância de turmas cadastrada"
            })
        } else {
            response.status(200).json(json)
        }
    },

    createTurmas: async (request, response) => {
        let json = { error: "", result: {} }

        let nome = request.body.nome
        let periodo_letivo = request.body.periodo_letivo

        if (nome && periodo_letivo) {

            let turmas = await TurmaServices.createTurmas(nome, periodo_letivo)

            json.result = {
                id: turmas.insertId,
                nome,
                periodo_letivo
            }


        } else {
            json.error = "Campos imcompletos!"
        }

        response.header("Access-Control-Allow-Origin", "*")
        response.status(201).json(json)

    },

    updateTurmas: async (request, response) => {

        let json = { error:"",result: {}}

        let id = request.params.id
        let nome = request.body.nome
        let periodo_letivo = request.body.periodo_letivo

        if(id){

            await TurmaServices.updateTurmas( id, nome, periodo_letivo)

            json.result = {id, nome,periodo_letivo}


        }else{
            json.error = "Error ID"

        }
        
        response.header("Access-Control-Allow-Origin","*")
        response.json(json)
    },

    deleteTurmas: async (request, response) => {
        
        let json = { error : "", result: "" }

        let id = request.params.id

        if(id){

            await TurmaServices.deleteTurmas(id)
            json.result = `Turma deletada com sucesso ID:${id}`
        } else{
            json.error = "Erro ID!"
        }

        response.header("Access-Control-Allow-Origin","*")
        response.json(json)

    }



}