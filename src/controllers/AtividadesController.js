const { response } = require("express");
const AtividadesServices = require("../services/AtividadesServices");


module.exports = {

    searchAtividades: async (request, response) => {
        let json = { error: "", result: [] }

        let atividades = await AtividadesServices.searchAtividades()

        for (let i in atividades) {
            json.result.push({
                id: atividades[i].id,
                nome: atividades[i].nome,
                descricao: atividades[i].descricao,
                data_entrega: atividades[i].data_entrega,
                peso_nota: atividades[i].peso_nota,
                turma_id: atividades[i].turma_id
            })
        }
        response.header("Access-Control-Allow-Origin", "*")

        if (json.result.length == 0) {
            response.status(200).json({
                message: "Nenhuma atividade existente!"
            })
        } else {
            response.status(200).json(json)
        }
    },

    createAtividades: async (request, response) => {
        let json = { error: "", result: {} }

        let nome = request.body.nome
        let descricao = request.body.descricao
        let data_entrega = request.body.data_entrega
        let peso_nota = request.body.peso_nota
        let turma_id = request.body.turma_id


        if (nome && descricao && peso_nota && data_entrega && turma_id) {

            let atividades = await AtividadesServices.createAtividades(nome, descricao, data_entrega, peso_nota, turma_id)

            json.result = {
                id:atividades.insertId,
                nome,
                descricao,
                data_entrega,
                peso_nota,
                turma_id
            }


        } else {
            json.error = "Campos imcompletos!"
        }

        response.header("Access-Control-Allow-Origin", "*")
        response.status(201).json(json)

    },

    updateAtividades: async (request, response) => {

        let json = { error:"",result: {}}

        let id = request.params.id
        let nome = request.body.nome
        let descricao = request.body.descricao
        let peso_nota = request.body.peso_nota
        let turma_id = request.body.turma_id

        if(id){

            await AtividadesServices.updateAtividades( id, nome, descricao,data_entrega, peso_nota, turma_id)

            json.result = {id, nome,descricao,data_entrega,peso_nota,turma_id}


        }else{
            json.error = "Error ID"

        }
        
        response.header("Access-Control-Allow-Origin","*")
        response.json(json)
    },

    deleteAtividades: async (request, response) => {
        
        let json = { error : "", result: "" }

        let id = request.params.id

        if(id){

            await AtividadesServices.deleteAtividades(id)
            json.result = `Turma deletada com sucesso ID:${id}`
        } else{
            json.error = "Erro ID!"
        }

        response.header("Access-Control-Allow-Origin","*")
        response.json(json)

    }

}