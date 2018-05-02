var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz' });
});

//pagina de credits
router.get('/credits', function(req, res, next) {
    res.render('credits');
});

//pagina de quizzes
router.get('/quizzes', function(req, res, next) {
    res.render('quizzes');
});

module.exports = router;
