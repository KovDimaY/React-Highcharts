var express = require('express');
var router = express.Router();

/* GET line page. */
router.get('/', function(req, res, next) {
  res.render('combo', { title: 'React Charts Combination' });
});

module.exports = router;