/* 
Protect Against Clickjacking with X-Frame-Options (clickjacking.js)
Clickjacking is an attack that involves hiding elements of your page in an iframe so that the user can interact with them without realizing it. Set the X-Frame-Options header to prevent this attack.
*/
/**
 * Middleware to set X-Frame-Options header for clickjacking protection.
 */
const clickjackingProtection = (req, res, next) => {
  res.setHeader('X-Frame-Options', 'DENY'); // Bloqueia iframes em todas as páginas
  next();
};

module.exports = clickjackingProtection;

/* Apply clickjackingProtection Globally */
const clickjackingProtection = require('./src/security/clickjacking');
app.use(clickjackingProtection);
