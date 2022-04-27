import express from 'express'; /* Chamando o pacote do express */
import querys_Cemiterio from './querys/querys_Cemiterio.js'; /* Chamando as querys */
import querys_Falecidos from './querys/querys_Falecidos.js';
import querys_Funerarias from './querys/querys_Funerarias.js';
import cors from 'cors';
import querys_Sepulturas from './querys/querys_Sepulturas.js';
import querys_Sepultamentos from './querys/querys_Sepultamentos.js';
import querys_Codigos from './querys/querys_Codigos.js';

const app = express(); /* Colocando em uma variavel para poder utilizar futuramente */



app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: true }));



app.get('/status', function(req,res){
  res.status(200).send('Conexao estabelecida com o Banco')
        
    
}) /* Criando a rota Status e colocando uma funcao de callback que Responde o status do banco */

/* ------------------------------ROTA CEMITERIO------------------------------------------------ */
app.get('/und',async function(req,res){
  const busca_Unidades = await querys_Cemiterio.findUnidades();
  res.status(200).send(busca_Unidades)
}) /* Criando uma rota que busca os dados de unidades do banco */

app.get('/popNameUnd',async function(req,res){
  const busca_Unidades = await querys_Cemiterio.findNameUnidades();
  res.status(200).send(busca_Unidades)
}) 

app.post('/cod',async function(req,res){
  const undcodigo = req.body
  const busca_Unidades = await querys_Cemiterio.findUnidadesCod(undcodigo);
  res.status(200).send(busca_Unidades)
}) /* Criando uma rota que busca os dados especifico de unidades do banco */

app.post('/insertUnd',async function(req,res){
  const dados =req.body
  await querys_Cemiterio.insert_Unidades(dados)
  res.status(200).send('Inserido com sucesso' )
  
}) /* Criando uma rota que insere os dados de unidades do banco */

app.get('/populaCodigoUnd',async function(req,res){
  const pop_Cod = await querys_Codigos.codUnidades();
  res.status(200).send(pop_Cod)
}) 

app.put('/updateUnd',async function(req,res){
  const dados =req.body
  await querys_Cemiterio.altera_Unidades(dados)
  res.status(200).send('alterado com sucesso' )
  
})
app.delete('/deleteUnd',async function(req,res){
  const dados =req.body
  await querys_Cemiterio.delete_Unidades(dados)
  res.status(200).send('deletado com sucesso' )
  
})

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
app.post('/falCod',async function(req,res){
  const falcod = req.body
  const busca_Falecidos_Nome = await querys_Falecidos.findFalecidoCod(falcod);
  res.status(200).send(busca_Falecidos_Nome)
})

app.post('/insertFal',async function(req,res){
  const dados =req.body
  await querys_Falecidos.insert_Falecidos(dados)
  res.status(200).send('Inserido com sucesso' )
  
})

app.get('/populaCodigoFal',async function(req,res){
  const pop_Cod_Fal = await querys_Codigos.codFalecidos();
  res.status(200).send(pop_Cod_Fal)
}) 

app.put('/updateFal',async function(req,res){
  const dados =req.body
  await querys_Falecidos.altera_Falecidos(dados)
  res.status(200).send('alterado com sucesso' )
  
})

app.delete('/deleteFal',async function(req,res){
  const dados =req.body
  await querys_Falecidos.delete_Falecidos(dados)
  res.status(200).send('deletado com sucesso' )
  
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

app.get('/populaCodigoSep',async function(req,res){
  const pop_Cod = await querys_Codigos.codSepulturas();
  res.status(200).send(pop_Cod)
}) 

app.put('/updateSep',async function(req,res){
  const dados =req.body
  await querys_Sepulturas.altera_Sepultura(dados)
  res.status(200).send('alterado com sucesso' )
  
})

app.delete('/deleteSep',async function(req,res){
  const dados =req.body
  await querys_Sepulturas.delete_Sepulturas(dados)
  res.status(200).send('deletado com sucesso' )
  
})
/* ------------------------------ROTA FUNERARIAS------------------------------------------------ */
app.get('/fun',async function(req,res){
  const busca_Fun = await querys_Funerarias.findFunerarias();
  res.status(200).send(busca_Fun)
})

app.get('/popNameFun',async function(req,res){
  const busca_Funerarias = await querys_Funerarias.findFunerariasNome();
  res.status(200).send(busca_Funerarias)
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

app.get('/populaCodigoFun',async function(req,res){
  const pop_Cod = await querys_Codigos.codFunerarias();
  res.status(200).send(pop_Cod)
}) 

app.put('/updateFun',async function(req,res){
  const dados =req.body
  await querys_Funerarias.altera_Funerarias(dados)
  res.status(200).send('alterado com sucesso' )
  
})
app.delete('/deleteFun',async function(req,res){
  const dados =req.body
  await querys_Funerarias.delete_Funerarias(dados)
  res.status(200).send('deletado com sucesso' )
  
})

/* ------------------------------ROTA SEPULTAMENTO---------------------------------------------- */
app.get('/sepul',async function(req,res){
  const busca_sepultamentos = await querys_Sepultamentos.findSepultamentos();
  res.status(200).send(busca_sepultamentos)
})


app.post('/insertSepul',async function(req,res){
  const dados =req.body
  await querys_Sepultamentos.insert_Sepultamentos(dados)
  res.status(200).send('Inserido com sucesso' )
  
})

app.get('/populaCodigoSepul',async function(req,res){
  const pop_Cod = await querys_Codigos.codSepultamentos();
  res.status(200).send(pop_Cod)
}) 

app.post('/sepulCod',async function(req,res){
  const sepulcod = req.body
  const busca_Fun = await querys_Sepultamentos.findSepultamentosCod(sepulcod);
  res.status(200).send(busca_Fun)
})

app.put('/updateSepul',async function(req,res){
  const dados =req.body
  await querys_Sepultamentos.altera_Sepultamentos(dados)
  res.status(200).send('alterado com sucesso' )
  
})

app.delete('/deleteSepul',async function(req,res){
  const dados =req.body
  await querys_Sepultamentos.delete_Sepultamentos(dados)
  res.status(200).send('deletado com sucesso' )
  
})
/* -------------------------------------------------------------------------------------------- */
app.listen(8081, function(){
    console.log('Servidor rodando na url http://localhost:8081')
}); /* Iniciando o servidor com a variavel criada */