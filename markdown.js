// Package markdown.js creates a README.md from a markdown.html file, converting html to md
// Instructions
// Just create a markdown.html file and fill with html
//
// then run
// ```$ node markdown.js```
// to convert to README.md file
// from the same directory.
'use strict';
var html2markdown = require('html2markdown');
var fs = require('fs');

var html = fs.readFileSync("markdown.html", "utf8",  function(err, data){
  console.log( "read file:", data );
  if (err) {
    console.log( "Could not read markdown.html file" );
  }
});

var md = (html2markdown(html));
fs.writeFile("README.md", md, function(err) {
  console.log( 'wrote file:', md );
  if (err) {
    console.log('It didn\'t work');
  }
});

