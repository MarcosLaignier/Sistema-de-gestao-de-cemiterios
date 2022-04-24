import conexaoDB from '../db/database.js';
import express from 'express';
import modelFun from '../models/funModel.js';


class querysFunerarias{
    async findFunerarias(){
        const sql = `select * from SGCFUNERARIAS order by funcodigo;` 
        const result = await conexaoDB.query(sql);  
        const rows = result.rows;
        return rows || []; 
    }

    async findFunerariasNome(){
        const sql = `select fundescricao from SGCFUNERARIAS;` 
        const result = await conexaoDB.query(sql);  
        const rows = result.rows;
        return rows || []; 
    }

    async findFunerariasCod(modelFun){
        const sql = `select * from SGCFUNERARIAS where funcodigo = ($1);` 
        const values = [modelFun.funcodigo]
        const result = await conexaoDB.query(sql,values);  
        const rows = result.rows; 
        return rows || []; 
    }


    async insert_Funerarias(modelFun){
        const sql = `insert into SGCFUNERARIAS (funcodigo,fundescricao,funcidade,funendereco,funnumero) 
        values ($1 , $2, $3, $4, $5);`
        const values = [modelFun.funcodigo, modelFun.fundescricao , modelFun.funcidade , modelFun.funendereco,modelFun.funnumero] 
        return await conexaoDB.query(sql,values)
        
    }

    async altera_Funerarias(modelFun){
        const sql = `update SGCFUNERARIAS set fundescricao = $1, funcidade = $2 , funendereco = $3 ,funnumero = $4  where funcodigo = $5`
        const values = [ modelFun.fundescricao , modelFun.funcidade , modelFun.funendereco,modelFun.funnumero,modelFun.funcodigo]
        return await conexaoDB.query(sql,values)
        
    }

}

export default new querysFunerarias();