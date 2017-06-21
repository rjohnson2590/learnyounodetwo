var exports = module.exports = {};

var fs = require('fs');
var path = require('path');
var ext = process.argv[3];
var http = require('http');

function callback (res){
    res.setEncoding('utf8');
    res.on("data", function(data){
        console.log(data);
    })
}

http.get(process.argv[2], callback);



