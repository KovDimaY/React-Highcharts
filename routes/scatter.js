var express = require('express');
var router = express.Router();

/* GET line page. */
router.get('/', function(req, res, next) {
  res.render('scatter', { title: 'React 3D Scatter Chart' });
});

module.exports = router;