var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('simple-progress-with-focus-management', {
    title: 'Simple progress bar with focus management',
    script: 'simple-progress-with-focus-management'
  });
});

module.exports = router;
