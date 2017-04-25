var express = require('express');
var router = express.Router();

/* GET line page. */
router.get('/', function(req, res, next) {
  res.render('clock', { title: 'React Clock' });
});

module.exports = router;