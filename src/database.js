require('dotenv').config({path: "variaveis.env"})
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
})

connection.connect((erro)=>{
    if(erro) throw error;
    console.log (`connection to database ${process.env.DB_NAME}`)
})

module.exports = connection;