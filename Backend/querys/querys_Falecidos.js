import conexaoDB from '../db/database.js';
import express from 'express';
import modelFal from '../models/falModel.js';


class querysFalecidos{
    async findFalecidos(){
        const sql = `select * from SGCFALECIDOS;` 
        const result = await conexaoDB.query(sql);  
        const rows = result.rows;
        return rows || []; 
    }

    async findFalecidosNome(modelFal){
        const sql = `select * from SGCFALECIDOS where falnome like ($1);` 
        const values = [modelFal.falnome]
        const result = await conexaoDB.query(sql,values);  
        const rows = result.rows; 
        return rows || []; 
    }


    async insert_Falecidos(modelFal){
        const sql = `insert into SGCFALECIDOS (falnome,falcpf,falsexo,falnascimento,falnaturalidade,falfalecimento,falmedresp) 
        values ($1 , $2, $3, $4, $5, $6,$7);`
        const values = [modelFal.falnome , modelFal.falcpf , modelFal.falsexo , modelFal.falnascimento, modelFal.falnaturalidade, modelFal.falfalecimento, modelFal.falmedresp] 
        return await conexaoDB.query(sql,values)
        
    }

}

export default new querysFalecidos();