var express = require('express');
var router = express.Router();

/* GET index page of the application. */
router.get('*', function(req, res, next) {
  res.render('index', { title: 'React Highcharts' });
});

module.exports = router;
