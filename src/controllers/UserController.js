const { response } = require("express");
const UserServices = require("../services/UserServices");

module.exports = {

    readyUser: async (request, response) => {
        let json = { error: "", result: [] }

        let senha = request.body.senha
        let email = request.body.email

        let user = await UserServices.searchUserAccount(senha,email)

        for (let i in user) {
            json.result.push({
                email: user[i].email,
                senha: user[i].senha
            })
        }
        response.header("Access-Control-Allow-Origin", "*")

        if (json.result.length == 0) {
            response.status(200).json({
                message: "Nenhuma conta de usuario encontrada!!!"
            })
        } else {
            response.status(200).json(json)
        }
    },

    createUser: async (request, response) => {
        let json = { error: "", result: {} }

        let nome_de_usuario = request.body.nome_de_usuario
        let senha = request.body.senha
        let email = request.body.email

        if (nome_de_usuario && senha && email) {

            let user = await UserServices.createUser(nome_de_usuario, senha, email)

            json.result = {
                id: user.insertId,
                nome_de_usuario,
                senha,
                email
            }


        } else {
            json.error = "Campos imcompletos!"
        }

        response.header("Access-Control-Allow-Origin", "*")
        response.status(201).json(json)

    },

    updatePassUser: async (request, response) => {

        let json = { error:"",result: {}}

        let senha = request.body.senha
        let email = request.params.email
        
        if(email){

            await UserServices.updatePassUser(email,senha)

            json.result = {email,senha}

        }else{
            json.error = "E-mail não encontrado"

        }
        
        response.header("Access-Control-Allow-Origin","*")
        response.json(json)
    }

}