/*
Path Restrictions for Static Files (staticFilesAccess.js)
To prevent access to sensitive files such as logs and backups, restrict which directories and files can be publicly accessed.
*/

const express = require('express');
const path = require('path');

/**
 * Middleware to serve only allowed static files.
 */
const staticFilesAccess = express.static(path.join(__dirname, 'public'), {
  dotfiles: 'deny', // Bloqueia arquivos com pontos no nome, como ".env"
  extensions: ['html', 'css', 'js'], // Extensões permitidas
  index: false, // Impede listagem automática de diretórios
});

module.exports = staticFilesAccess;

/* Add in app.js to limit the acess */ 

const staticFilesAccess = require('./src/security/staticFilesAccess');
app.use('/public', staticFilesAccess);
