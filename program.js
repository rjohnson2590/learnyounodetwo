var exports = module.exports = {};

var fs = require('fs');
var path = require('path');
var ext = process.argv[3];
var http = require('http');
var bl = require('bl');
var urls =[process.argv[2],process.argv[3],process.argv[4]];
var list=[];
var count = 0;

function print(result){
    for(var i=0; i<result.length; i++){
        console.log(result[i])
    }
}

function callback (index){
    http.get(urls[index], function(res){
        res.setEncoding('utf8');
        res.pipe(bl(function(err, data){
            list[index] = data.toString();
            count++;
            if(count == 3){
                print(list);
            }
        }));
    })
}

for (var i =0; i<3; i++){
    callback(i)
}

