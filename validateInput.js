/*
Strict Input Validation (validateInput.js)
To prevent malformed or malicious data from causing problems in your application, you can validate all input data using the Joi or validator library.
/*

//npm install joi

const Joi = require('joi');

/**
 * Middleware to validate request body schema.
 * @param {Object} schema - Joi schema for validation
 */
const validateInput = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

module.exports = validateInput;

/* Example how to use a Sign-up user route: */

const validateInput = require('./src/security/validateInput');
const Joi = require('joi');

const userSchema = Joi.object({
  username: Joi.string().alphanum().min(3).max(30).required(),
  password: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
});

app.post('/register', validateInput(userSchema), (req, res) => {
  res.send('User registered successfully');
});
