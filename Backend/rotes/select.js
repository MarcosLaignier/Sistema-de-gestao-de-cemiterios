const db = require('../db/database')

async function insertTables(){
    
    await db.connect()
    /* await db.query('CREATE TABLE teste (name varchar(60));') */
    /* await db.query(`INSERT INTO teste (name) VALUES ('Marcos2');`) */
    /* await db.query(`delete from teste where name = 'Marcos2'`) */
    
    console.log('passou aqui!')
}

insertTables()