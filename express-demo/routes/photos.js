var express = require('express');
var router = express.Router();

/* GET photo. */
router.get('/', function(req, res, next) {
  res.render('photos');
});

module.exports = router;
