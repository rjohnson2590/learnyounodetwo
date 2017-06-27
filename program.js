var exports = module.exports = {};

var fs = require('fs');
var path = require('path');
var ext = process.argv[3];
var http = require('http');
var bl = require('bl');
var net = require('net');
var date = new Date();
var month = date.getMonth()+1;

var server= http.createServer(function(req, res){
    var readStream= fs.createReadStream(process.argv[3]);
    readStream.pipe(res);
})
server.listen(process.argv[2]);