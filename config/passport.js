var localStrategy = require("passport-local").Strategy;
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
const dbconfig = require('./database');
var connection = mysql.createConnection(dbconfig.connection);
connection.query('USE ' + dbconfig.database);

module.exports = function(passport) {
    passport.serializeUser(function(user, done){
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        connection.query("SELECT * FROM users WHERE id = ? ", [id],function(err, rows) {
            done(err, rows[0]);
        });
    });

passport.use(
    'local-signup',
    new localStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback : true

    },
    function(req, username, password, done){
        connection.query("SELECT * FROM users WHERE username = ?", [username], function(err, rows){
            if(err)
                return done(err);
            if(rows.length){
                return done(null, false, req.flash('signupMessage', 'That is already taken'));
            }else{
                var newUseMysql = {
                    username : username,
                    password : bcrypt.hashSync(password, null, null)
                };
                var  insertQuery = "INSERT INTO users (username, password) values(?, ?)";

                connection.query(insertQuery, [newUseMysql.username, newUseMysql.password], function(err, rows){
                    newUseMysql.id = rows.insertId;

                    return done(null, newUseMysql);
                });
            } 
        });
    })
    );
passport.use(
    'local-login',
    new localStrategy({
        usernameField : 'username',
        passwordField : 'password',
        passReqToCallback: true
    },
    function(req, username, password, done){
        connection.query("SELECT * FROM users WHERE username = ?", [username], function(err, rows){
            if(err)
                return done(err);
            if(!rows.length){
                return done(null, false, req.flash('loginMessage', 'No User found'));
            }
            if(!bcrypt.compareSync(password, rows[0].password))
                return done(null, false, req.flash('loginMessage', 'Wrong Password'));
             
            return done(null, row[0]);   
        });
    })
    );
//passport.use();
    
};