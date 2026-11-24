const { createClient }  = require('redis');

const redisClient = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'road-guide-ultrapolished-95017.db.redis.io',
        port: 11905
    }
});

module.exports = redisClient;