/* 
Secure Cookie Handling (cookieSecurity.js)
Insecure cookies can be intercepted in man-in-the-middle (MitM) attacks. Set cookie options to httpOnly and secure to protect session cookies.
*/
const cookieOptions = {
  httpOnly: true,   // Impede acesso ao cookie via JavaScript no lado do cliente
  secure: process.env.NODE_ENV === 'production', // Ativa apenas em HTTPS em produção
  sameSite: 'strict' // Impede envio de cookies com requisições cross-site
};

/**
 * Set secure cookie in response.
 */
const setSecureCookie = (res, name, value) => {
  res.cookie(name, value, cookieOptions);
};

module.exports = setSecureCookie;

/* Use setSecureCookie in authentication routes: */

const setSecureCookie = require('./src/security/cookieSecurity');

app.post('/login', (req, res) => {
  const token = 'generatedJwtToken';
  setSecureCookie(res, 'sessionToken', token);
  res.send('Logged in successfully');
});
