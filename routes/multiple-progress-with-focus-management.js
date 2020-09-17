var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('multiple-progress-with-focus-management', {
    title: 'Multiple progress bars with updates and focus management',
    script: 'multiple-progress-with-focus-management',
    sr: (req.query.sr == 'true') ? true : false
  });
});

module.exports = router;
