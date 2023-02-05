//@ts-check
const { ValidationError } = require('sequelize');

function logErrors(error, req, res, next){
  console.error(error);
  next(error);
}

function errorHandler(error, req, res, next){
  res.status(500).json({
    statusCode: 500,
    message: error.message,
    stack: error.stack
  });
}

function boomErrorHandler(error, req, res, next){
  if(error.isBoom){
    const { output } = error;
    res.status(output.statusCode).json(output.playload);
  }
  next(error);
}

function ormErrorHandler(error, req, res, next) {
  if (error instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: error.name,
      errors: error.errors
    });
  }
  next(error);
}

module.exports = {logErrors, errorHandler, boomErrorHandler, ormErrorHandler};
