var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('simple-progress-with-live-region', {
    title: 'Simple progress bar with live region',
    script: 'simple-progress-with-live-region',
    sr: (req.query.sr == 'true') ? true : false
  });
});

module.exports = router;
