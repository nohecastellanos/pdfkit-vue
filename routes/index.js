var express = require('express');
var router = express.Router();

var pdf = require('pdfkit');
var fs = require('fs');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/pdf', function(req, res, next){
  res.render('pdf/index', {title: 'Prueba PDF'});
});
/*router.post('/pdf', function(req, res){
      var myDoc = new pdf;

      myDoc.pipe(fs.createWriteStream('node.pdf'));

      myDoc.font('Times-Roman').fontSize(48).text('NodeJS PDF Document', 100, 100);

      myDoc.end();
});*/
/*router.get('*', function(req, res){
  res.send('what???', 404);
});*/

module.exports = router;
