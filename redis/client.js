const { Redis } = require('@upstash/redis')

const redisClient = new Redis({
  url: 'https://renewing-dodo-55887.upstash.io',
  token: process.env.REDIS_KEY,
    
  })
  module.exports = redisClient;