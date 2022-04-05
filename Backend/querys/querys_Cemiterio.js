import conexaoDB from '../db/database.js';
import express from 'express';
import Form from '../models/modelo.js';

/* Criar classe para exportar */
class querysCemiterio{
/* Criar funcao assincrona  */
    async findUnidades(){
        const sql = `select * from SGCUNIDADES;` /* Colocar a query sql */
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
        const sql = `insert into SGCUNIDADES (undnome,undendereco,undnumero,undcidade,undestado,undresponsavel) 
        values ($1 , $2, $3, $4, $5, $6);`
        const values = [Form.undnome , Form.undendereco , Form.undnumero ,Form.undcidade ,Form.undestado , Form.undresponsavel] 
        return await conexaoDB.query(sql,values)
        
    }

}

export default new querysCemiterio();