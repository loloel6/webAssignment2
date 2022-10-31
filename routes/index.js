var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home' 
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home' 
  });
});


/* GET Contants page. */
router.get('/contact', function(req, res, next) {
  res.render('index', { 
    title: 'Contact me' 
  });
});

/* GET Project page. */
router.get('/project', function(req, res, next) {
  res.render('index', { 
    title: 'Projects' 
  });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('index', { 
    title: 'About me' 
  });
});
module.exports = router;
