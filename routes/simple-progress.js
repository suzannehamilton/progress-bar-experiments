var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('simple-progress', {
    title: 'Simple progress bar',
    script: 'simple-progress',
    sr: (req.query.sr == 'true') ? true : false
  });
});

module.exports = router;
