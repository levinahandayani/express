var express = require('express');
var router = express.Router();
const inventory = require('../model/inventory');


router.get('/', function(req, res, next) {
  res.render('inventory');
});

router.post('/store', async function(req, res) {
	inventory.store(req.body, function(err, result) {
		res.redirect('/inventory');
	});
});
module.exports = router;