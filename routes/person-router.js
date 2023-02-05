const express = require('express');
const PersonService = require('../service/person-service');
const validatorHandler = require('../middlewares/validator-handler');
const {
  createPersonSchema,
  updatePersonSchema,
  getPersonSchema,
} = require('../schema/person-schema');

const router = express.Router();
const service = new PersonService();

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
  validatorHandler(getPersonSchema, 'params'),
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
  validatorHandler(createPersonSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newPerson = await service.create(body);
    res.status(201).json(newPerson);
  }
);

router.patch(
  '/:id',
  validatorHandler(getPersonSchema, 'params'),
  validatorHandler(updatePersonSchema, 'body'),
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
