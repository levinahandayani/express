var express = require('express');
var router = express.Router();
const dashboard = require('../model/dashboard');

/* GET home page. */
router.post('/store', function(req, res) {
	Post.store(req.body, function(err, result){
		res.redirect('/dashboard');
	});
});

module.exports = router;

router.get('/', function(req, res, next) {
  res.render('dashboard/dashboard', { title: 'page baru' });
});

module.exports = router;
