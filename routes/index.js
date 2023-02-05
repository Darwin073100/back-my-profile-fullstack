const express = require('express');

const personRouter = require('./person-router');
const languageRouter = require('./language-router');
const frameworkRouter = require('./framework-router');
const projectRouter = require('./project-router');

function routerApi(app){
  const router = express.Router();
  app.use('/api/v1/', router);
  router.use('/person', personRouter);
  router.use('/language', languageRouter);
  router.use('/framework', frameworkRouter);
  router.use('/project', projectRouter);
}

module.exports = routerApi;
