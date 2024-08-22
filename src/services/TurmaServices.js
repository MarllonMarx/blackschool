const database = require('../database')

module.exports = {

    searchTurmas: () => {
        return new Promise(
            (acceptted, rejected) => {
                database.query("SELECT * FROM turmas", (error, result) => {
                    if (error) {
                        rejected(error)
                        return
                    }
                    acceptted(result)
                })
            }
        )
    },

    createTurmas: (nome, periodo_letivo) => {

        return new Promise(
            (accepted, rejected) => {
                database.query(`INSERT INTO turmas (nome, periodo_letivo) VALUES ('${nome}', '${periodo_letivo}')`,
                    (error, result) => {
                        if (error) {
                            rejected(error)
                            return
                        }
                        accepted(result)
                    })

            })

    },

    updateTurmas: (id,nome, periodo_letivo) => {
        return new Promise(
            (accepted,rejected) => {
                database.query(`UPDATE turmas SET nome = '${nome}', periodo_letivo = '${periodo_letivo}' WHERE id = '${id}'`,
                    (error, result) => {
                       if (error){
                        rejected(error)
                        return
                       }     
                       accepted(result)
                })
                
            })
        
    },

    deleteTurmas: (id) => {
        return new Promise(
            (accepted,rejected) => {
                database.query(`DELETE FROM turmas WHERE id =${id}`,
                (error,result)=>{
                    if(error){
                        rejected(error)
                        return
                    }
                    accepted(result)
                    
                })
            }
        )
    }




}