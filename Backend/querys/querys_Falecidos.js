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

    async findUnidadesName(Form){
        const sql = `select * from SGCUNIDADES where undcodigo = ($1);` 
        const values = [Form.undcodigo]
        const result = await conexaoDB.query(sql,values);  
        const rows = result.rows; 
        return rows || []; 
    }

    async insert_Falecidos(modelFal){
        const sql = `insert into SGCFALECIDOS(falnome) 
        values ($1 );`
        const values = [modelFal.falnome] 
        return await conexaoDB.query(sql,values)
        
    }

  /*   async insert_Falecidos(modelFal){
        const sql = `insert into SGCUNIDADE (falnome,falcpf,falsexo,falnascimento,falnaturalidade,falfalecimento,falmedresp) 
        values ($1 , $2, $3, $4, $5, $6,$7);`
        const values = [modelFal.falnome , Form.undendereco , Form.undnumero ,Form.undcidade ,Form.undestado , Form.undresponsavel] 
        return await conexaoDB.query(sql,values)
        
    } */

}

export default new querysFalecidos();