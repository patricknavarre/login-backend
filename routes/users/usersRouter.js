var express = require('express');
var router = express.Router();
var { signUp} = require('./controller/userController')
var { checkIfEmptyMiddleware, checkForSymbolMiddleware} = require('../lib/validator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post("/sign-up", 
checkIfEmptyMiddleware, 
checkForSymbolMiddleware, 
signUp
);

module.exports = router;
