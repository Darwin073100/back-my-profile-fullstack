const express = require('express');
const ProjectService = require('../service/project-service');
const validatorHandler = require('../middlewares/validator-handler');
const {
  createProjectSchema,
  updateProjectSchema,
  getProjectSchema,
} = require('../schema/project-schema');

const router = express.Router();
const service = new ProjectService();

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
  validatorHandler(getProjectSchema, 'params'),
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
  validatorHandler(createProjectSchema, 'body'),
  async (req, res) => {
    const body = req.body;
    const newProject = await service.create(body);
    res.status(201).json(newProject);
  }
);

router.patch(
  '/:id',
  validatorHandler(getProjectSchema, 'params'),
  validatorHandler(updateProjectSchema, 'body'),
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
