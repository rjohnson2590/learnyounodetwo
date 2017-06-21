var exports = module.exports = {};

var fs = require('fs');
var path = require('path');
var ext = process.argv[3];
var http = require('http');
var bl = require('bl');
var net = require('net');
var date = new Date();
var month = date.getMonth()+1;

var server= net.createServer(function(socket){

    socket.write(date.getFullYear()+'-'+'0'+month+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+'\n')
    socket.end();
});

server.listen(process.argv[2]);

//console.log(date.getFullYear()+'-'+date.getMonth()+'-'+date.getDate()+' '+date.getHours()+':'+date.getMinutes()+'\n');