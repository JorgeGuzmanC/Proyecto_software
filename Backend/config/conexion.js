const mysql = require('mysql')
const conexion = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin12345',
    port: 3306,
    database: 'db_tacheck'
});

conexion.connect((err=>{
    if(err){
        console.log('Ha ocurriodo un errror'+ err)
    }
    else{
        console.log('La base de datos se conecto!')
    }
}));

module.exports = conexion;