var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
const dbconfig = require('../config/database');
//var connection = mysql.createConnection(dbconfig.connection);
const express = require('express');
const router = express.Router();
var body = require('body-parser');

//connection.query('USE ' + dbconfig.database);

router.use(body.urlencoded({extended: false}));

var connection = mysql.createConnection({  
    host: "localhost",  
    user: "root",  
    password: "",  
    database: "matcha"  
    });  

router.get('/', (req, res, next) => {
        res.render('../views/register.ejs');
});

router.post('/register', function(req, res){
        
                var newUseMysql = {
                    username : req.body.username,
                    password : req.body.password,
                };
                console.log(newUseMysql);
               // var  insertQuery = "INSERT INTO users (username, password) values(?, ?)";

                dbconfig.query("INSERT INTO users (name, password) values (?, ?)", [newUseMysql.username, newUseMysql.password], function(err, rows){
                   // newUseMysql.id = rows.insertId;
                   //console.log(err);
                   res.render('./login');
                   ///res.render('./');
                    //return done(null, newUseMysql);
                    //successRedirect: '/profile'

                });
 });


module.exports = router;