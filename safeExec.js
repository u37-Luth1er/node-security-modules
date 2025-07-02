// src/safeExec.js
const { execFile } = require('child_process');

function safeExec(cmd, args = []) {
  return new Promise((res, rej) => {
    execFile(cmd, args, { timeout: 5000, windowsHide: true }, (err, stdout, stderr) => {
      if (err) return rej(err);
      res(stdout.trim());
    });
  });
}

module.exports = safeExec;
