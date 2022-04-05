import express from 'express'; /* Chamando o pacote do express */
import querys_Cemiterio from './querys/querys_Cemiterio.js'; /* Chamando as querys */
import querys_Falecidos from './querys/querys_Falecidos.js';
import cors from 'cors';


const app = express(); /* Colocando em uma variavel para poder utilizar futuramente */



app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/status', function(req,res){
  res.status(200).send('Conexao estabelecida com o Banco')
        
    
}) /* Criando a rota Status e colocando uma funcao de callback que Responde o status do banco */

/* ------------------------------ROTA CEMITERIO------------------------------------------------ */
app.get('/',async function(req,res){
  const busca_Unidades = await querys_Cemiterio.findUnidades();
  res.status(200).send(busca_Unidades)
}) /* Criando uma rota que busca os dados de unidades do banco */

app.post('/cod',async function(req,res){
  const undcodigo = req.body
  const busca_Unidades = await querys_Cemiterio.findUnidadesCod(undcodigo);
  res.status(200).send(busca_Unidades)
}) /* Criando uma rota que busca os dados de unidades do banco */

app.post('/insert',async function(req,res){
  const dados =req.body
  await querys_Cemiterio.insert_Unidades(dados)
  res.status(200).send('Inserido com sucesso' )
  
}) /* Criando uma rota que insere os dados de unidades do banco */

/* ------------------------------ROTA FALECIDOS------------------------------------------------ */
app.get('/fal',async function(req,res){
  const busca_Unidades = await querys_Falecidos.findFalecidos();
  res.status(200).send(busca_Unidades)
})

app.post('/insertFal',async function(req,res){
  const dados =req.body
  await querys_Falecidos.insert_Falecidos(dados)
  res.status(200).send('Inserido com sucesso' )
  
})

/* -------------------------------------------------------------------------------------------- */
app.listen(8081, function(){
    console.log('Servidor rodando na url http://localhost:8081')
}); /* Iniciando o servidor com a variavel criada */