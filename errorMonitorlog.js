/*
Error Monitoring and Secure Logs (errorMonitor.js)
Monitor errors and protect sensitive data in logs by hiding user information or critical data that could be used in social engineering attacks.
*/

/**
 * Middleware to handle errors and sanitize logs.
 */
const errorMonitor = (err, req, res, next) => {
  // Remova dados sensíveis dos logs antes de registrar o erro
  console.error('Sanitized Error:', {
    message: err.message,
    stack: err.stack,
    user: req.user ? 'User data omitted for security' : 'No user data',
  });
  res.status(500).json({ error: 'Internal Server Error' });
};

module.exports = errorMonitor;

/*Use the errorMonitor as middleware to error troubleshooting: */

const errorMonitor = require('./src/security/errorMonitor');
app.use(errorMonitor);
