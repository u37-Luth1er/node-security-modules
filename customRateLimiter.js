// src/customRateLimiter.js
const LRU = require("lru-cache");

const options = { max: 5000, ttl: 60 * 1000 };
const hitsCache = new LRU(options);

function customRateLimiter(maxHitsPerMin = 60) {
  return (req, res, next) => {
    const key = req.ip + req.originalUrl;
    const hits = (hitsCache.get(key) || 0) + 1;
    hitsCache.set(key, hits);
    if (hits > maxHitsPerMin) {
      return res.status(429).json({ error: 'Too many requests' });
    }
    next();
  };
}

module.exports = customRateLimiter;
