var createError = require('http-errors');
var express = require('express');
var router = express.Router();

const errorsController = require('../controllers/errors.controller');
var usersRouter = require('./users.route');


router.get('/', (req,res,next) => {
  res.json({'function': 'api only'});
});

router.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(errorsController.handleError);

module.exports = router;
