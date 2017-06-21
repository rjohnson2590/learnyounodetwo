var exports = module.exports = {};

var fs = require('fs');
var path = require('path');
var ext = process.argv[3];
var http = require('http');
var bl = require('bl');


function callback (res){
    res.setEncoding('utf8');
    res.pipe(bl(function(err, data){
        console.log(data.length);
        console.log(data.toString());
    }))
    //res.on("data", function(data){
    //    console.log(data);
    //})
}

http.get(process.argv[2], callback);



