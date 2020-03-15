const express = require('express');
const router = express.Router();
const dbconfig = require('../config/database');
var body = require('body-parser');
const session = require('express-session');
var cookiesParser = require('cookie-parser');

router.get('/', (req, res, next) => {
    
    req.session.loginRouter=false;
    res.render('../views/index');
  
        //res.render('../views/login.ejs');
});

//var logout = function(req,res,next){
    