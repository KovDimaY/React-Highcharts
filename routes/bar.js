var express = require('express');
var router = express.Router();

/* GET line page. */
router.get('/', function(req, res, next) {
  res.render('bar', { title: 'React Bar Chart' });
});

module.exports = router;