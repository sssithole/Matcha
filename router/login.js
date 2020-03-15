const express = require('express');
const router = express.Router();
const dbconfig = require('../config/database');
var body = require('body-parser');
const session = require('express-session');
var cookiesParser = require('cookie-parser');

router.get('/', (req, res, next) => {
        res.render('../views/login.ejs');
});

router.post('/login', function(req, res){
        
        var newUseMysql = {
            username : req.body.username,
            password : req.body.password,
        };
        console.log(newUseMysql);
       
        dbconfig.query("SELECT * FROM `users` WHERE name = ? AND `password`= ?", [newUseMysql.username, newUseMysql.password], function(err, rows){
           // newUseMysql.id = rows.insertId;
           console.log(err);
        //    res.render('./profile');
        });       //    }
        //function(req, res{
                if(req.body.remember){
                    req.session.cookie.maxAge = 1000 * 60 * 3;
                }else{
                    req.session.cookie.expires = false;
                }
                console.log(session);
                 res.render('./profile');
               // });
        
});



module.exports = router;