const database = require('../database')

module.exports = {

    searchUser: (senha, email) => {
        return new Promise(
            (acceptted, rejected) => {
                database.query(`SELECT * FROM usuario WHERE senha = '${senha}' and email = '${email}'`, (error, result) => {
                    if (error) {
                        rejected(error)
                        return
                    }
                    acceptted(result)
                })
            }
        )
    },

    createUser: (nome_de_usuario, senha, email) => {

        return new Promise(
            (accepted, rejected) => {
                database.query(`INSERT INTO usuario (nome_de_usuario, senha, email) VALUES ('${nome_de_usuario}', '${senha}','${email}')`,
                    (error, result) => {
                        if (error) {
                            rejected(error)
                            return
                        }
                        accepted(result)
                    })

            })

    },

    updateUser: (senha, email) => {
        return new Promise(
            (accepted,rejected) => {
                database.query(`UPDATE usuario SET senha = '${senha}' WHERE email = '${email}'`,
                    (error, result) => {
                       if (error){
                        rejected(error)
                        return
                       }     
                       accepted(result)
                })
                
            })
        
    }

}