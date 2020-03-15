var mysql = require('mysql'); 

var con = mysql.createConnection({  
    host: "localhost",  
    user: "root",  
    password: ""  
}); 

con.connect(function(err) {  
    if (err) throw err;  
        console.log("Connected!");  
    con.query("CREATE DATABASE IF NOT EXISTS matcha", function (err, result) {  
        if (err) throw err;  
    console.log("Database created");  
    });  
});  

var con = mysql.createConnection({  
    host: "localhost",  
    user: "root",  
    password: "",  
    database: "matcha"  
});  
con.connect(function(err) {  
    if (err) throw err;  
        console.log("Connected!");  
    var sql = "CREATE TABLE IF NOT EXISTS users  ( `id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(50) NOT NULL , `pass` VARCHAR(100) NOT NULL , PRIMARY KEY (`id`))";/*CREATE TABLE `matcha`.`table` ( `id` INT NOT NULL AUTO_INCREMENT , `name` VARCHAR(50) NOT NULL , `pass` VARCHAR(100) NOT NULL , PRIMARY KEY (`id`)) ENGINE = InnoDB;*/   
    con.query(sql, function (err, result) {  
    if (err) throw err;  
        console.log("Table created");  
    });
});  

module.exports = con;