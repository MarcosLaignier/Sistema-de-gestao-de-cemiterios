import conexaoDB from '../db/database.js';
import express from 'express';
/* Criar classe para exportar */
class querys{
/* Criar funcao assincrona  */
    async findUnidades(){
        const sql = `select * from SGCUNIDADES;` /* Colocar a query sql */
        const result = await conexaoDB.query(sql);  /* Criar uma constante que recebe os dados da query acima */
        const rows = result.rows; /* Criar uma constante que pega as Linhas do resultado */
        return rows || []; /* Retornar a constante acima e se nao tiver nada, retornar vazio */
    }

    async insert_Unidades(req){
        const sql = `insert into SGCUNIDADES (undnome,undresponsavel) values ($1 , $2);`
        const {undnome , undresponsavel} = req.body;
        const dados = req.body.undnome
        const dados2=req.body.undresponsavel
        const values = [dados,dados2]
        const rows = await conexaoDB.query(sql,values);
    }

}

export default new querys();