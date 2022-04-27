import conexaoDB from '../db/database.js';
import express from 'express';
import modelFal from '../models/falModel.js';


class querysFalecidos{
    async findFalecidos(){
        const sql = `select * from SGCFALECIDOS order by falcodigo;` 
        const result = await conexaoDB.query(sql);  
        const rows = result.rows;
        return rows || []; 
    }

    async findFalecidosNome(modelFal){
        const sql = `select * from SGCFALECIDOS where falnome ilike '%' || $1 || '%';`

        const values = [modelFal.falnome]
        const result = await conexaoDB.query(sql,values);  
        const rows = result.rows; 
        return rows || []; 
    }

    async findFalecidoCod(modelFal){
        const sql = `select * from SGCFALECIDOS where falcodigo = $1;`

        const values = [modelFal.falcodigo]
        const result = await conexaoDB.query(sql,values);  
        const rows = result.rows; 
        return rows || []; 
    }


    async insert_Falecidos(modelFal){
        const sql = `insert into SGCFALECIDOS (falcodigo,falnome,falcpf,falsexo,falnascimento,falnaturalidade,falfalecimento,falmedresp) 
        values ($1 , $2, $3, $4, $5, $6,$7,$8);`
        const values = [modelFal.falcodigo,modelFal.falnome , modelFal.falcpf , modelFal.falsexo , modelFal.falnascimento, modelFal.falnaturalidade, modelFal.falfalecimento, modelFal.falmedresp] 
        return await conexaoDB.query(sql,values)
        
    }

    async altera_Falecidos(modelFal){
        const sql = `update SGCFALECIDOS set falnome = $1, falcpf = $2 , falsexo = $3 ,falnascimento = $4 , falnaturalidade = $5 , falfalecimento = $6 , falmedresp = $7 where falcodigo = $8`
        const values = [modelFal.falnome , modelFal.falcpf , modelFal.falsexo , modelFal.falnascimento, modelFal.falnaturalidade, modelFal.falfalecimento, modelFal.falmedresp,modelFal.falcodigo] 
        return await conexaoDB.query(sql,values)
        
    }


    async delete_Falecidos(modelFal){
        const sql = `delete from SGCFALECIDOS where falcodigo = $1`
        const values = [modelFal.falcodigo] 
        return await conexaoDB.query(sql,values)
        
    }
}

export default new querysFalecidos();