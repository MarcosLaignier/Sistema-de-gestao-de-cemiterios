import conexaoDB from '../db/database.js';
import express from 'express';


/* Criar classe para exportar */
class querysCodigos{
/* Criar funcao assincrona  */
    async codUnidades(){
        /* const sql = `select undcodigo from SGCUNIDADES;`  *//* Colocar a query sql */
        const sql = `select undcodigo from SGCUNIDADES ORDER BY undcodigo DESC limit 1;`
        const result = await conexaoDB.query(sql);  /* Criar uma constante que recebe os dados da query acima */
        const rows = result.rows; /* Criar uma constante que pega as Linhas do resultado */
        return rows || []; /* Retornar a constante acima e se nao tiver nada, retornar vazio */
    }

    async codFalecidos(){
        /* const sql = `select undcodigo from SGCUNIDADES;`  *//* Colocar a query sql */
        const sql = `select falcodigo from SGCFALECIDOS ORDER BY falcodigo DESC limit 1;`
        const result = await conexaoDB.query(sql);  /* Criar uma constante que recebe os dados da query acima */
        const rows = result.rows; /* Criar uma constante que pega as Linhas do resultado */
        return rows || []; /* Retornar a constante acima e se nao tiver nada, retornar vazio */
    }
    
    

}

export default new querysCodigos();
