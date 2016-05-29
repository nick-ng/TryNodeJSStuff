// Requires
// People's requires
var express = require( 'express' ); var app = express();
var http = require( 'http' ).Server( app );
var fs = require('fs');
var util = require('util');

var PAGEDIR = __dirname + '/pages';

app.set( 'port', ( process.env.PORT || 3434 ) );

//console.log(process.env);
fs.writeFile( 'hello.txt', 'hello' );

app.get( '/', function( req, res ) {
  //console.log(req);
  fs.writeFile( 'request.json', JSON.stringify(util.inspect(req)));
  console.log( 'Written request.txt');
  res.sendFile(PAGEDIR + '/home.html');
  //console.log(res)
  fs.writeFile( 'response.json', JSON.stringify(util.inspect(res)));
  console.log('Written response.txt');
});

app.post( '/', function( req, res ) {
  //console.log(req);
  fs.writeFile( 'postRequest.json', JSON.stringify(util.inspect(req)));
  console.log( 'Written request.txt');
  res.sendFile(PAGEDIR + '/home.html');
  //console.log(res)
  fs.writeFile( 'postResponse.json', JSON.stringify(util.inspect(res)));
  console.log('Written response.txt');
});

testURL = 'test'
app.get( '/' + testURL, function( req, res ) {
  //console.log(req);
  fs.writeFile( 'request.json', JSON.stringify(util.inspect(req)));
  console.log( 'Written request.txt');
  res.sendFile(PAGEDIR + '/home.html');
  //console.log(res)
  fs.writeFile( 'response.json', JSON.stringify(util.inspect(res)));
  console.log('Written response.txt');
});

app.post( '/' + testURL, function( req, res ) {
  //console.log(req);
  fs.writeFile( 'postRequest.json', JSON.stringify(util.inspect(req)));
  console.log( 'Written request.txt');
  res.sendFile(PAGEDIR + '/home.html');
  //console.log(res)
  fs.writeFile( 'postResponse.json', JSON.stringify(util.inspect(res)));
  console.log('Written response.txt');
});

http.listen( app.get( 'port' ), function(){
  console.log( 'listening on : ' + app.get('port') );
});
