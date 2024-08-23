const database = require('../database')

module.exports = {

        searchAtividades: () =>{
            return new Promise(
                (acceptted, rejected) =>{
                    database.query('SELECT * FROM atividades', (error, results) => {
                        if(error){
                            rejected(error)
                        }else{
                            acceptted(results)
                        }
                    })
                }
            )
         },

         createAtividades: (nome, descricao, data_entrega, peso_nota, turma_id) =>{
            return new Promise(
                (acceptted, rejected) =>{
                    database.query(`INSERT INTO atividades (nome, descricao, data_entrega, peso_nota, turma_id)
                         VALUES ('${nome}','${descricao}','${data_entrega}','${peso_nota}','${turma_id}')`, 
                         (error, results) => {
                        
                         if(error){
                            rejected(error)
                        }else{
                            acceptted(results[0])
                        }
                    })
                }
            )
         },

         updateAtividades: (id, nome, descricao, data_entrega, peso_nota, turma_id) =>{
            return new Promise(
                (acceptted, rejected) =>{
                    database.query(`UPDATE atividades SET nome='${nome}', descricao='${descricao}', data_entrega='${data_entrega}', peso_nota='${peso_note}', turma_id='${turma_id}'
                         WHERE id=${id}`,
                         (error, results) => {
                        
                         if(error){
                            rejected(error)
                        }else{
                            acceptted(results)
                        }
                    })
                }
            )
         },

         deleteAtividades: (id) =>{
            return new Promise(
                (acceptted, rejected) =>{
                    database.query(`DELETE FROM atividades WHERE id=${id}`,
                         (error, results) => {
                        
                         if(error){
                            rejected(error)
                        }else{
                            acceptted(results)
                        }
                    })
                }
            )
         }
}