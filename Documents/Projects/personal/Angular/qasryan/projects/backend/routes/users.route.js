var express = require('express');
const UserController = require('../controllers/users.controller');


var router = express.Router();

router.get('/', (req, res, next) => {
  console.log('this is a middleware');
  next();
});

router.get('/users', (req, res, next) => {
  res.send('<h1>In users</h1>')
});

router.get('/', (req, res, next) => {
  res.send('<h1>In Index</h1>')
});



router.get('/', UserController.getPosts);

module.exports = router;
