var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('simple-progress-with-realtime-updates', {
    title: 'Simple progress bar with realtime updates',
    script: 'simple-progress-with-realtime-updates',
    sr: (req.query.sr == 'true') ? true : false
  });
});

module.exports = router;
