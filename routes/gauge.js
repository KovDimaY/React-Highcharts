var express = require('express');
var router = express.Router();

/* GET line page. */
router.get('/', function(req, res, next) {
  res.render('gauge', { title: 'React Gauge Chart' });
});

module.exports = router;