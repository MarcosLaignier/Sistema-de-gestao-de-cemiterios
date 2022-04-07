import express from 'express'; /* Chamando o pacote do express */
import querys_Cemiterio from './querys/querys_Cemiterio.js'; /* Chamando as querys */
import querys_Falecidos from './querys/querys_Falecidos.js';
import querys_Funerarias from './querys/querys_Funerarias.js';
import cors from 'cors';
import querys_Sepulturas from './querys/querys_Sepulturas.js';


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
}) /* Criando uma rota que busca os dados especifico de unidades do banco */

app.post('/insert',async function(req,res){
  const dados =req.body
  await querys_Cemiterio.insert_Unidades(dados)
  res.status(200).send('Inserido com sucesso' )
  
}) /* Criando uma rota que insere os dados de unidades do banco */

/* ------------------------------ROTA FALECIDOS------------------------------------------------ */
app.get('/fal',async function(req,res){
  const busca_Falecidos = await querys_Falecidos.findFalecidos();
  res.status(200).send(busca_Falecidos)
})

app.post('/falnome',async function(req,res){
  const falnome = req.body
  const busca_Falecidos_Nome = await querys_Falecidos.findFalecidosNome(falnome);
  res.status(200).send(busca_Falecidos_Nome)
})

app.post('/insertFal',async function(req,res){
  const dados =req.body
  await querys_Falecidos.insert_Falecidos(dados)
  res.status(200).send('Inserido com sucesso' )
  
})

/* ------------------------------ROTA SEPULTURAS------------------------------------------------ */
app.get('/sep',async function(req,res){
  const busca_sepulturas = await querys_Sepulturas.findSepulturas();
  res.status(200).send(busca_sepulturas)
})

app.post('/sepCod',async function(req,res){
  const sepcod = req.body
  const busca_sepulturas_Cod = await querys_Sepulturas.findSepulturaCod(sepcod);
  res.status(200).send(busca_sepulturas_Cod)
})

app.post('/insertSep',async function(req,res){
  const dados =req.body
  await querys_Sepulturas.insert_Sepulturas(dados)
  res.status(200).send('Inserido com sucesso' )
  
})

/* ------------------------------ROTA FUNERARIAS------------------------------------------------ */
app.get('/fun',async function(req,res){
  const busca_Falecidos = await querys_Funerarias.findFunerarias();
  res.status(200).send(busca_Falecidos)
})

app.post('/funCod',async function(req,res){
  const funCod = req.body
  const busca_Fun = await querys_Funerarias.findFunerariasCod(funCod);
  res.status(200).send(busca_Fun)
})

app.post('/insertFun',async function(req,res){
  const dados =req.body
  await querys_Funerarias.insert_Funerarias(dados)
  res.status(200).send('Inserido com sucesso' )
  
})

/* ------------------------------ROTA SEPULTAMENTO---------------------------------------------- */


/* -------------------------------------------------------------------------------------------- */
app.listen(8081, function(){
    console.log('Servidor rodando na url http://localhost:8081')
}); /* Iniciando o servidor com a variavel criada */