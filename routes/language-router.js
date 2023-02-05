const express = require('express');
const LanguageService = require('../service/language-service');
const validatorHandler = require('../middlewares/validator-handler');
const {
  createLanguageSchema,
  updateLanguageSchema,
  getLanguageSchema,
} = require('../schema/language-schema');

const router = express.Router();
const service = new LanguageService();

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
  validatorHandler(getLanguageSchema, 'params'),
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
  validatorHandler(createLanguageSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newLanguage = await service.create(body);
    res.status(201).json(newLanguage);
  }
);

router.patch(
  '/:id',
  validatorHandler(getLanguageSchema, 'params'),
  validatorHandler(updateLanguageSchema, 'body'),
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
