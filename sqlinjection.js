/*npm install express-sanitize-sql */

const sanitizeSql = require('express-sanitize-sql');

/**
 * Middleware to sanitize SQL inputs.
 */
const sanitizeSqlInputs = (req, res, next) => {
  sanitizeSql(req.body); // Sanitizes req.body
  sanitizeSql(req.query); // Sanitizes req.query
  sanitizeSql(req.params); // Sanitizes req.params
  next();
};

module.exports = sanitizeSqlInputs;

/*Use middleware in your routes to ensure all entries are sanitized:*/

const sanitizeSqlInputs = require('./src/security/sqlInjection');
app.use(sanitizeSqlInputs);
