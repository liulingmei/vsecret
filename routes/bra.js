var express = require('express');
var router = express.Router();

/* GET bra page. */
router.get('/', function(req, res, next) {
  res.render('bra', { title: 'Express' });
});

module.exports = router;
