// const express = require('express');
// const router = express.Router();
// const dbconfig = require('../config/database');
// var body = require('body-parser');
// const session = require('express-session');
// var cookiesParser = require('cookie-parser');

 if('geolocation' in navigator){
 console.log('geoloaction is avilable');
 navigator.geolocation.getCurrentPosition(position => {
 console.log(position.coords.latitude);
 console.log(position.coords.longitude);
 var newUseMysql = {
     username : req.body.latitude,
     password : req.body.longitude,
 };
 console.log(newUseMysql);

 dbconfig.query("UPDATE * FROM `geolocation` SET latitude = ? AND `longitude`= ?", [newUseMysql.latitude, newUseMysql.longitude], function(err, rows){
    // newUseMysql.id = rows.insertId;SET `id_location`=[value-1],`latitude`=[value-2],`longitude`=[value-3] WHERE 1
    console.log(err);
 //    res.render('./profile');
 });

 });
}else{
 console.log('geolocation not available');
}

var options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0
};

function success(pos) {
var crd = pos.coords;
console.log('Your current position is:');
console.log(`Latitude : ${crd.latitude}`);
console.log(`Longitude: ${crd.longitude}`);
console.log(`More or less ${crd.accuracy} meters.`);
}
function error(err) {
console.warn(`ERROR(${err.code}): ${err.message}`);
}
navigator.geolocation.getCurrentPosition(success, error, options);


<sript>


// </sript>


// CREATE TABLE `matcha`.`geolocation` ( `id_location` INT NOT NULL AUTO_INCREMENT , `latitude` INT(150) NOT NULL , `longitude` INT(150) NOT NULL , PRIMARY KEY (`id_location`)) ENGINE = InnoDB;