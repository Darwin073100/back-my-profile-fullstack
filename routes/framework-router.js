const express = require('express');
const FrameworkService = require('../service/framework-service');
const validatorHandler = require('../middlewares/validator-handler');
const {
  createFrameworkSchema,
  updateFrameworkSchema,
  getFrameworkSchema,
} = require('../schema/framework-schema');

const router = express.Router();
const service = new FrameworkService();

router.get('/', async (req, res, next) => {
  try {
    const items = await service.findAll();
    res.json(items);
  } catch (error) {
    next(error);
  }
});

router.get(
  '/:id',
  validatorHandler(getFrameworkSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const item = await service.findOne(id);
      res.json(item);
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  '/',
  validatorHandler(createFrameworkSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newFramework = await service.create(body);
    res.status(201).json(newFramework);
  }
);

router.patch(
  '/:id',
  validatorHandler(getFrameworkSchema, 'params'),
  validatorHandler(updateFrameworkSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const item = await service.update(id, body);
      res.json(item);
    } catch (error) {
      next(error);
    }
  }
);

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const rta = await service.delete(id);
  res.json(rta);
});

module.exports = router;
