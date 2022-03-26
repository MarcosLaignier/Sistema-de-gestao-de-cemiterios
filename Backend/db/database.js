const pg = require('pg') /* Chamando o modulo pg */


var urlConnectDB = 'postgres://ujwbpebc:eOUyFK3aWy25CXiabK7SOFcxZSuXTL1F@tuffi.db.elephantsql.com/ujwbpebc' /* Conectando via url no elephant sql */
const db = new pg.Client(urlConnectDB) /* Criando um cliente de conexao */

module.exports = db /* Exportando para usar em outras telas */