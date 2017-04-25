var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('pie', { title: 'React Pie Chart' });
});

module.exports = router;
