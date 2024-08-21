const database = require('../database')

module.exports = {
    searchAlunos:() => {
        return new Promise( 
        (accepted, reject) => {
        database.query('SELECT * FROM aluno',(err, res) => {
            if (err) {
                reject(err)
                return
            }
            accepted(result)
        })
        }
    
    )
    }

    

}