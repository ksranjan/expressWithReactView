var router = require('express').Router();

router.get('/', function(req, res){
  res.render('cars/index', {name : 'sameer'});
});
router.get('/new', function(req, res){
  res.render('cars/new');
});
module.exports = router;
