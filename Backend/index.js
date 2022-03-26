const express = require('express') /* Chamando o pacote do express */
const connectDB = require('./db/database')

const app = express(); /* Colocando em uma variavel para poder utilizar futuramente */


app.get('/', function(req,res){
    res.send('seja bem vindo')
}) /* Criando a rota GET e colocando uma funcao de callback que RESponde algo */

app.get('/sobre',function(req,res){
    res.send('Pagina Sobre Voce')
})

app.listen(8081, function(){
    console.log('Servidor rodando na url http://localhost:8081')
}); /* Iniciando o servidor com a variavel criada */