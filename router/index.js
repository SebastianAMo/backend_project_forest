const router = require('express').Router();

const movementRouter = require('./movement.router');
const attackRouter = require('./attack.router');
const jumpRouter = require('./jump.router');
const idleRouter = require('./idle.router');

const loadEndpoints = (app) => {
  app.use('/api/v1', router);
  router.use('/movement', movementRouter);
  router.use('/attack', attackRouter);
  router.use('/jump', jumpRouter);
  router.use('/idle', idleRouter);
};

module.exports = loadEndpoints;