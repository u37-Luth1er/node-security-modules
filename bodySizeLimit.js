/* Payload Size Limitation (bodySizeLimit.js)
To avoid overloading the server with large payloads, you can use the express.json() library with a size limit. */

const express = require('express');

/**
 * Middleware to limit JSON payload size.
 * @param {string} size - Maximum size for the payload (e.g., '10kb').
 * @returns {function} - Middleware to enforce size limit.
 */
const limitBodySize = (size = '10kb') => express.json({ limit: size });

module.exports = limitBodySize;

/*Use limitBodySize to set a maximum payload size:*/

const limitBodySize = require('./src/security/bodySizeLimit');

app.use('/api', limitBodySize('5kb'));
