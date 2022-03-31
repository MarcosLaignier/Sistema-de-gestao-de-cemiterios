import conexaoDB from '../db/database.js';
import express from 'express';
import modelo from '../models/unidades.models.js'
import Form from '../models/modelo.js';

/* Criar classe para exportar */
class querys{
/* Criar funcao assincrona  */
    async findUnidades(){
        const sql = `select * from SGCUNIDADES;` /* Colocar a query sql */
        const result = await conexaoDB.query(sql);  /* Criar uma constante que recebe os dados da query acima */
        const rows = result.rows; /* Criar uma constante que pega as Linhas do resultado */
        return rows || []; /* Retornar a constante acima e se nao tiver nada, retornar vazio */
    }

    async insert_Unidades(Form){
        const sql = `insert into SGCUNIDADES (undnome) values ($1);`
        
        /* const values = [Form.undnome]
        const {rows} = await conexaoDB.query<{form: String}>(sql,values); */
        const values = [Form.undnome]
        return await conexaoDB.query(sql,values)
        /* const [teste2] = rows */
                
        /* return [rows]; */
    }

}

export default new querys();