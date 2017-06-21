/**
 * Created by rjohnson on 6/17/2017.
 */
var run = require("./program.js");
var fs = require('fs');
var dir = process.argv[2];
var ext = process.argv[3];

function callback (err, list) {
    //var info = data.split('\n');
    //console.log(info.length - 1);
    if(err){
        console.log(err);
    }
    var arr = [];
    for(var i =0; i< list.length; i++){
        var info = list[i].split('.');

        if (info[1] == ext){
            console.log(list[i]);
        }
    }

}


run(dir, ext, callback);