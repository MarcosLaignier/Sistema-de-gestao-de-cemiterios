import conexaoDB from '../db/database.js';
import express from 'express';
import sepultaModel from '../models/sepulModel.js';


class querysSepultamento{
    async findSepultamentos(){
        const sql = `select * from SGCSEPULTAMENTOS order by sepulcodigo;` 
        const result = await conexaoDB.query(sql);  
        const rows = result.rows;
        return rows || []; 
    }


    async insert_Sepultamentos(sepultaModel){
        const sql = `insert into SGCSEPULTAMENTOS (sepulcodigo,sepulfalecido,sepulcpffal,sepulfuneraria,sepulcemiterio,sepulsepultura,sepdatasepultamento,sepdatafalecimento) 
        values ($1 , $2, $3, $4, $5, $6, $7, $8);`
        const values = [sepultaModel.sepulcodigo,sepultaModel.sepulfalecido, sepultaModel.sepulcpffal, sepultaModel.sepulfuneraria, sepultaModel.sepulcemiterio, sepultaModel.sepulsepultura, sepultaModel.sepdatasepultamento, sepultaModel.sepdatafalecimento] 
        return await conexaoDB.query(sql,values)
    }
    
    async findSepultamentosCod(sepultaModel){
        const sql = `select * from SGCSEPULTAMENTOS where sepulcodigo = ($1);` 
        const values = [sepultaModel.sepulcodigo]
        const result = await conexaoDB.query(sql,values);  
        const rows = result.rows; 
        return rows || []; 
    }

    async altera_Sepultamentos(sepultaModel){
        const sql = `update SGCSEPULTAMENTOS set sepulfalecido = $1, sepulcpffal = $2 , sepulfuneraria = $3 ,sepulcemiterio = $4, sepulsepultura=$5, sepdatasepultamento=$6, sepdatafalecimento=$7 where sepulcodigo = $8`
        const values = [sepultaModel.sepulfalecido, sepultaModel.sepulcpffal, sepultaModel.sepulfuneraria, sepultaModel.sepulcemiterio, sepultaModel.sepulsepultura, sepultaModel.sepdatasepultamento, sepultaModel.sepdatafalecimento,sepultaModel.sepulcodigo] 
        return await conexaoDB.query(sql,values)
        
    }

    async delete_Sepultamentos(sepultaModel){
        const sql = `delete from SGCSEPULTAMENTOS where sepulcodigo = $1`
        const values = [sepultaModel.sepulcodigo] 
        return await conexaoDB.query(sql,values)
        
    }
}

export default new querysSepultamento();