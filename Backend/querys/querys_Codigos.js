import conexaoDB from '../db/database.js';
import express from 'express';


class querysCodigos{

    async codUnidades(){
        const sql = `select undcodigo from SGCUNIDADES ORDER BY undcodigo DESC limit 1;`
        const result = await conexaoDB.query(sql);
        const rows = result.rows;
        return rows || []; 
    }

    async codFalecidos(){
        const sql = `select falcodigo from SGCFALECIDOS ORDER BY falcodigo DESC limit 1;`
        const result = await conexaoDB.query(sql);
        const rows = result.rows; 
        return rows || []; 
    }

    async codSepulturas(){
        const sql = `select sepcodigo from SGCSEPULTURAS ORDER BY sepcodigo DESC limit 1;`
        const result = await conexaoDB.query(sql); 
        const rows = result.rows; 
        return rows || [];
    }
    
    async codFunerarias(){
        const sql = `select funcodigo from SGCFUNERARIAS ORDER BY funcodigo DESC limit 1;`
        const result = await conexaoDB.query(sql); 
        const rows = result.rows; 
        return rows || [];
    }

    async codSepultamentos(){
        const sql = `select sepulcodigo from SGCSEPULTAMENTOS ORDER BY sepulcodigo DESC limit 1;`
        const result = await conexaoDB.query(sql); 
        const rows = result.rows; 
        return rows || [];
    }
    

}

export default new querysCodigos();
