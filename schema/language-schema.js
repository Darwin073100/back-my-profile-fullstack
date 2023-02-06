//@ts-check
const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const version = Joi.string();
const uriImg = Joi.string().uri();

const getLanguageSchema = Joi.object({
  id: id.required()
});

const createLanguageSchema = Joi.object({
  name: name.required(),
  version,
  uriImg,
});

const updateLanguageSchema = Joi.object({
  name,
  version,
  uriImg,
});

module.exports = {
  getLanguageSchema,
  createLanguageSchema,
  updateLanguageSchema
};


