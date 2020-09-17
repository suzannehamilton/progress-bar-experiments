var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('multiple-progress-with-updates', {
    title: 'Multiple progress bars with updates',
    script: 'multiple-progress-with-updates',
    sr: (req.query.sr == 'true') ? true : false
  });
});

module.exports = router;
