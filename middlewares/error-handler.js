//@ts-check
const { ValidationError } = require('sequelize');

function logErrors(error, req, res, next){
  console.error(error);
  next(error);
}

function unknownHandler(error, req, res, next){
  res.status(error.output.statusCode).json({
    statusCode: error.output.statusCode,
    message: error.message,
    stack: error.stack
  });
  next(error)
}

function errorHandler(error, req, res, next){
  res.status(error.output.statusCode).json({
    statusCode: 500,
    message: error.message,
    stack: error.stack
  });
  next(error)
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

module.exports = {logErrors,unknownHandler, errorHandler, boomErrorHandler, ormErrorHandler};
