//importo mysql
const mysql = require('mysql2');

//creo la variabile x la connesione al database
const dbConfig = {  
  host: 'localhost',          
  user: 'root',       
  password: '12345678',    
  database: 'db_blog'    
};  

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Connected to MySQL!')
    }
})

module.exports = connection;