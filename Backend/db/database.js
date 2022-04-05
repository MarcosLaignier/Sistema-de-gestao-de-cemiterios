 /* Chamando o modulo pg */
 import pkg from 'pg';
 const {Pool} = pkg
/* import { Pool } from "pg";*/
const connectionString = 'postgres://ujwbpebc:eOUyFK3aWy25CXiabK7SOFcxZSuXTL1F@tuffi.db.elephantsql.com/ujwbpebc' /* Conectando via url no elephant sql */
const conexaoDB = new Pool({connectionString}) /* Criando um cliente de conexao */

export default conexaoDB; /* Exportando para usar em outras telas */