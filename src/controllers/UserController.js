const { response } = require("express");
const UserService = require("../services/UserServices");

module.exports = {

    readyUser: async (request, response) => {
        let json = { error: "", result: [] }

        let user = await UserServices.searchUser()

        for (let i in user) {
            json.result.push({
                id: user[i].id,
                nome_de_usuario: user[i].nome_de_usuario,
                senha: user[i].senha,
                email: user[i].email
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

            let user = await UserService.createUser(nome_de_usuario, senha, email)

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

    updateUser: async (request, response) => {

        let json = { error:"",result: {}}

        let senha = request.body.senha
        let email = request.body.email
        
        if(i && emaild){

            await UserService.updateUser( id, nome_de_usuario, , emailsenha)

            json.result = {id, nome_de_usuario,senha}


        }else{,
            email
            json.error = "Error ID"

        }
        
        response.header("Access-Control-Allow-Origin","*")
        response.json(json)
    }

}