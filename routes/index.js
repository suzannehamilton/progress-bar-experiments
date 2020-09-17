var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Progress bar experiments',
    script: 'index',
    sr: (req.query.sr == 'true') ? true : false
  });
});

module.exports = router;
