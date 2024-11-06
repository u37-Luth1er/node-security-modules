/*Disabling Dangerous HTTP Methods (disableMethods.js)
Some HTTP methods like TRACE, DELETE, or OPTIONS may be unnecessary for most APIs and, if enabled, can be exploited by attackers. You can block dangerous methods with simple middleware.*/

/**
 * Middleware to disable unsafe HTTP methods.
 */
const disableMethods = (req, res, next) => {
  const unsafeMethods = ['TRACE', 'TRACK', 'DELETE', 'OPTIONS'];
  if (unsafeMethods.includes(req.method)) {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  next();
};

module.exports = disableMethods;

/* Use o middleware to block this methods in all application: */

const disableMethods = require('./src/security/disableMethods');
app.use(disableMethods);


