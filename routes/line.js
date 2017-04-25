var express = require('express');
var router = express.Router();

/* GET line page. */
router.get('/', function(req, res, next) {
  res.render('line', { title: 'React Line Chart' });
});

module.exports = router;
