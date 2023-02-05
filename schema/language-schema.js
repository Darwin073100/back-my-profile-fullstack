//@ts-check
const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const uriImg = Joi.string().uri();

const getLanguageSchema = Joi.object({
  id: id.required()
});

const createLanguageSchema = Joi.object({
  name: name.required(),
  uriImg,
});

const updateLanguageSchema = Joi.object({
  name,
  uriImg,
});

module.exports = {
  getLanguageSchema,
  createLanguageSchema,
  updateLanguageSchema
};


