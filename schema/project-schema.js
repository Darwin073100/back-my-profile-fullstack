const Joi = require('joi');

const id = Joi.number().integer();
const personId = Joi.number().integer();
const languageId = Joi.number().integer();
const name = Joi.string();
const description = Joi.string();
const uriProject = Joi.string().uri();
//@ts-check
const createAt = Joi.date().timestamp();

const getProjectSchema = Joi.object({
  id: id.required(),
});

const createProjectSchema = Joi.object({
  personId: personId.required(),
  languageId: languageId.required(),
  name: name.required(),
  description: description.required(),
  uriProject: uriProject.required(),
});

const updateProjectSchema = Joi.object({
  personId,
  languageId,
  name,
  description,
  uriProject,
  createAt,
});

module.exports = {
  getProjectSchema,
  createProjectSchema,
  updateProjectSchema
};
