// src/acl.js
const roles = {
  admin: ['/admin', '/users'],
  user: ['/profile', '/orders']
};

function aclMiddleware(role) {
  return (req, res, next) => {
    const allowed = roles[role] || [];
    if (!allowed.includes(req.path)) {
      return res.status(403).json({ error: 'Forbidden' });
    }
    next();
  };
}

module.exports = aclMiddleware;

// Exemplo de uso

app.use('/admin', aclMiddleware('admin'));
