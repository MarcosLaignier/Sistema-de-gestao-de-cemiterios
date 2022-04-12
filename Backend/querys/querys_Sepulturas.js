import conexaoDB from '../db/database.js';
import express from 'express';
import modelSep from '../models/sepModel.js';


class querysSepulturas{
    async findSepulturas(){
        const sql = `select * from SGCSEPULTURAS;` 
        const result = await conexaoDB.query(sql);  
        const rows = result.rows;
        return rows || []; 
    }

    async findSepulturaCod(modelSep){
        const sql = `select * from SGCSEPULTURAS where sepcodigo = ($1);` 
        const values = [modelSep.sepcodigo]
        const result = await conexaoDB.query(sql,values);  
        const rows = result.rows; 
        return rows || []; 
    }


    async insert_Sepulturas(modelSep){
        const sql = `insert into SGCSEPULTURAS (sepCodigo,sepdescricao,sepcemiterio) 
        values ($1 , $2, $3);`
        const values = [modelSep.sepcodigo ,modelSep.sepdescricao, modelSep.sepcemiterio] 
        return await conexaoDB.query(sql,values)
        
    }

}

export default new querysSepulturas();