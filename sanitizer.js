// src/sanitizer.js
const Joi = require('joi');

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(0).optional()
});

function sanitizeInput(schema, data) {
  const { error, value } = schema.validate(data, { stripUnknown: true });
  if (error) throw new Error(`Invalid input: ${error.message}`);
  return value;
}

module.exports = { userSchema, sanitizeInput };
