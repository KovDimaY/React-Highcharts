var express = require('express');
var router = express.Router();

/* GET line page. */
router.get('/', function(req, res, next) {
  res.render('bubble', { title: 'React Bubble Chart' });
});

module.exports = router;