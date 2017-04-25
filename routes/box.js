var express = require('express');
var router = express.Router();

/* GET line page. */
router.get('/', function(req, res, next) {
  res.render('box', { title: 'React Box Plot' });
});

module.exports = router;