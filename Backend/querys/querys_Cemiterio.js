import conexaoDB from '../db/database.js';
import express from 'express';
import Form from '../models/modelo.js';

/* Criar classe para exportar */
class querysCemiterio{
/* Criar funcao assincrona  */
    async findUnidades(){
        const sql = `select * from SGCUNIDADES order by undcodigo;` /* Colocar a query sql */
        const result = await conexaoDB.query(sql);  /* Criar uma constante que recebe os dados da query acima */
        const rows = result.rows; /* Criar uma constante que pega as Linhas do resultado */
        return rows || []; /* Retornar a constante acima e se nao tiver nada, retornar vazio */
    }

    async findUnidadesCod(Form){
        const sql = `select * from SGCUNIDADES where undcodigo = ($1);` 
        const values = [Form.undcodigo]
        const result = await conexaoDB.query(sql,values);  
        const rows = result.rows; 
        return rows || []; 
    }

    async insert_Unidades(Form){
        const sql = `insert into SGCUNIDADES (undcodigo,undnome,undendereco,undnumero,undcidade,undestado,undresponsavel) 
        values ($1 , $2, $3, $4, $5, $6, $7);`
        const values = [Form.undcodigo, Form.undnome , Form.undendereco , Form.undnumero ,Form.undcidade ,Form.undestado , Form.undresponsavel] 
        return await conexaoDB.query(sql,values)
        
    }

    async findNameUnidades(){
        const sql = `select undnome from SGCUNIDADES;` /* Colocar a query sql */
        const result = await conexaoDB.query(sql);  /* Criar uma constante que recebe os dados da query acima */
        const rows = result.rows; /* Criar uma constante que pega as Linhas do resultado */
        return rows || []; /* Retornar a constante acima e se nao tiver nada, retornar vazio */
    }

    async altera_Unidades(Form){
        const sql = `update SGCUNIDADES set undnome = $1, undendereco = $2 , undnumero = $3 ,undcidade = $4 , undestado = $5 , undresponsavel = $6 where undcodigo = $7`
        const values = [Form.undnome , Form.undendereco , Form.undnumero ,Form.undcidade ,Form.undestado , Form.undresponsavel,Form.undcodigo] 
        return await conexaoDB.query(sql,values)
        
    }

    async delete_Unidades(Form){
        const sql = `delete from SGCUNIDADES where undcodigo = $1`
        const values = [Form.undcodigo] 
        return await conexaoDB.query(sql,values)
        
    }
}







export default new querysCemiterio();

