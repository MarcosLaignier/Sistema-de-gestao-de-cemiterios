import conexaoDB from '../db/database.js';
import express from 'express';
import sepultaModel from '../models/sepulModel.js';


class querysSepultamento{
    async findSepultamentos(){
        const sql = `select * from SGCSEPULTAMENTOS;` 
        const result = await conexaoDB.query(sql);  
        const rows = result.rows;
        return rows || []; 
    }


    async insert_Sepultamentos(sepultaModel){
        const sql = `insert into SGCSEPULTAMENTOS (sepulfalecido,sepulcpffal,sepulfuneraria,sepulcemiterio,sepulsepultura,sepdatasepultamento,sepdatafalecimento) 
        values ($1 , $2, $3, $4, $5, $6, $7);`
        const values = [sepultaModel.sepulfalecido, sepultaModel.sepulcpffal, sepultaModel.sepulfuneraria, sepultaModel.sepulcemiterio, sepultaModel.sepulsepultura, sepultaModel.sepdatasepultamento, sepultaModel.sepdatafalecimento] 
        return await conexaoDB.query(sql,values)
    }
    /* async findSepulturaCod(modelSep){
        const sql = `select * from SGCSEPULTURAS where sepcodigo = ($1);` 
        const values = [modelSep.sepcodigo]
        const result = await conexaoDB.query(sql,values);  
        const rows = result.rows; 
        return rows || []; 
    }


    async insert_Sepulturas(modelSep){
        const sql = `insert into SGCSEPULTURAS (sepdescricao,sepcemiterio) 
        values ($1 , $2);`
        const values = [modelSep.sepdescricao, modelSep.sepcemiterio] 
        return await conexaoDB.query(sql,values)
        
    } */

}

export default new querysSepultamento();