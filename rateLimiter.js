/// src/rateLimiter.js
const rateLimit = require('express-rate-limit');

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false
});

module.exports = apiLimiter;

// Use como middleware nas rotas:

app.use('/api/', apiLimiter);
