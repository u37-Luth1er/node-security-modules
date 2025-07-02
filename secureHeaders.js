// src/secureHeaders.js
const helmet = require('helmet');

function secureHeaders(app) {
  app.use(helmet());
}

module.exports = secureHeaders;

// Exemplo de uso

const secureHeaders = require('./src/secureHeaders');
secureHeaders(app);


