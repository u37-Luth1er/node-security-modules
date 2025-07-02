const express = require('express');
const secureHeaders = require('./src/secureHeaders');
const apiLimiter = require('./src/rateLimiter');
const aclMiddleware = require('./src/acl');
const { sanitizeInput, userSchema } = require('./src/sanitizer');
const logSecurityEvent = require('./src/securityLogger');
const customRateLimiter = require('./src/customRateLimiter');
const safeExec = require('./src/safeExec');
// ...

const app = express();
app.use(express.json());
secureHeaders(app);
app.use('/api/', apiLimiter);

app.post('/api/login', customRateLimiter(10), (req, res) => {
  try {
    const data = sanitizeInput(userSchema, req.body);
    // ... login logic
  } catch (e) {
    logSecurityEvent(`Failed login validation from ${req.ip}: ${e.message}`);
    return res.status(400).json({ error: "Invalid input" });
  }
  res.json({ success: true });
});

app.use('/admin', aclMiddleware('admin'), (req, res) => {
  res.send('Admin area');
});

// Execução segura
app.get('/exec', async (req, res) => {
  try {
    const out = await safeExec('ls', ['-la']);
    res.send(out);
  } catch {
    logSecurityEvent(`Unauthorized exec attempt by ${req.ip}`);
    res.status(500).send('Error');
  }
});
