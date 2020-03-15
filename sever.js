const session = require('express-session');
var cookiesParser = require('cookie-parser');
var bodyParser = require('body-parser');
// var morgan = require('morgan');
var mysql = require('mysql');
var bcrypt = require('bcrypt-nodejs');
const dbconfig = require('./config/database');
const express = require('express');
const cons = require('consolidate');
var loginRouter = require('./router/login');
var index = require('./router');
var register = require('./router/register');
var logout = require('./router/logout');
const path = require('path');
const app = express();

app.set('view engine','ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.engine('ejs', cons.swig)
app.set('views', path.join(__dirname, 'views'))
//app.set('view engine', 'ejs')
app.use(session({secret: 'randomstringsessionsecret'}));

app.use('/',index);
app.use('/login',loginRouter);
app.use('/register', register);
//app.use('/logout', logout)

app.use('./login/login', function(){
  if('geolocation' in navigator){
    console.log('geoloaction is avilable');
    navigator.geolocation.getCurrentPosition(position => {
    console.log(position.coords.latitude);
    console.log(position.coords.longitude);
    });
}else{
    console.log('geolocation not available');
}
});
//app.post()

app.get('/logout', function(req, res) {
  //  console.log(session);
    req.session.loginRouter=false;
    res.render('../views/index.ejs');
});

app.get('/login/login', function(req, res) {
  req.position
});

//app.post()
app.listen(3000, () =>{
    console.log('sever is running on port 3000 .....');
});


module.exports = app;