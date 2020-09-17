var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('multiple-progress-with-too-much-information', {
    title: 'Multiple progress bars with too much information',
    script: 'multiple-progress-with-too-much-information',
    sr: (req.query.sr == 'true') ? true : false
  });
});

module.exports = router;
