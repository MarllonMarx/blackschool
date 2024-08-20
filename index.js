const express = require('express');
const server = express();

//Apresentar mensagem atraves do GET
server.get('/',(req,res)=>{
    return res.json({mensagem: 'API tá funcionando pai'})
})

//Verificar Status do Servidor
server.listen(3000, () => {

    console.log('Servidor está funcionando...')

});