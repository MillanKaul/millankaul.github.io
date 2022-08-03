var fs = require('fs');

var imageAsBase64 = fs.readFileSync( 'avtaar.png', 'base64');
console.log(imageAsBase64);
/*** put below into URL
//data:image/png;base64,imageAsBase64
***/
