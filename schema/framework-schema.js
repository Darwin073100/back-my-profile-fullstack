//@ts-check
const Joi = require('joi');

const id = Joi.number().integer();
const languageId = Joi.number().integer();
const name = Joi.string();
const version = Joi.string();
const uriImg = Joi.string().uri();
const description = Joi.string();
const createdAt = Joi.date();
const updatedAt = Joi.date();

const getFrameworkSchema = Joi.object({
  id: id.required(),
});

const createFrameworkSchema = Joi.object({
  languageId: languageId.required(),
  name: name.required(),
  version,
  uriImg,
  description,
});

const updateFrameworkSchema = Joi.object({
  languageId,
  name,
  version,
  uriImg,
  description,
  createdAt,
  updatedAt
});

module.exports = {
  getFrameworkSchema,
  createFrameworkSchema,
  updateFrameworkSchema
}
