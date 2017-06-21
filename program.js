var exports = module.exports = {};

var fs = require('fs');
var path = require('path');
var ext = process.argv[3];



/*function callback (err, list) {
    //var info = data.split('\n');
    //console.log(info.length - 1);

    var arr = [];
    for(var i =0; i< list.length; i++){
        var info = list[i].split('.');

        if (info[1] == ext){
            console.log(list[i]);
        }
    }

}*/

module.exports = function (directory, extension, callback) {
   
    fs.readdir(directory, function (err, list){
        if(err){
            return callback(err);
        } else {
            list = list.filter(function (file) {
                if(path.extname(file) === '.' + extension) return true;
            })
            return callback(null, list);
        }
    });

}

//fs.readdir(process.argv[2], callback);


//fs.readFile(process.argv[2],'utf8', callback);

//var newStr = str.split('\n');

