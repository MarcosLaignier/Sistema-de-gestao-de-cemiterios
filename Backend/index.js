
import express from 'express'; /* Chamando o pacote do express */
import querys from './querys/querys.js'; /* Chamando as querys */


const app = express(); /* Colocando em uma variavel para poder utilizar futuramente */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/status', function(req,res){
  res.status(200).send('Conexao estabelecida com o Banco')
        
    
}) /* Criando a rota Status e colocando uma funcao de callback que Responde o status do banco */


app.get('/',async function(req,res){
  const busca_Unidades = await querys.findUnidades();
  res.status(200).send(busca_Unidades)
}) /* Criando uma rota que busca os dados de unidades do banco */



app.post('/insert',async function(req,res){
  const dados =req.body
  await querys.insert_Unidades(dados)
  res.status(200).send('Inserido com sucesso' )
  
}) /* Criando uma rota que insere os dados de unidades do banco */



app.listen(8081, function(){
    console.log('Servidor rodando na url http://localhost:8081')
}); /* Iniciando o servidor com a variavel criada */