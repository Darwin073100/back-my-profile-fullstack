const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string();
const lastName = Joi.string();
const email = Joi.string().email();
const address = Joi.string();
const uriImg = Joi.string().uri();
const description = Joi.string();
const linkedin = Joi.string().uri();

const getPersonSchema = Joi.object({
  id: id.required()
});

const createPersonSchema = Joi.object({
  name: name.required(),
  lastName: lastName.required(),
  email,
  address,
  uriImg,
  description,
  linkedin,
});

const updatePersonSchema = Joi.object({
  name,
  lastName,
  email,
  address,
  uriImg,
  description,
  linkedin,
});

module.exports = {
  getPersonSchema,
  createPersonSchema,
  updatePersonSchema,
};
