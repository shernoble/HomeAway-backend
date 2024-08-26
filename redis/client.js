const { Redis } = require('@upstash/redis')

const redisClient = new Redis({
  url: 'https://renewing-dodo-55887.upstash.io',
  token: 'AdpPAAIjcDEwMTljYWIyNTI3NDA0YWQyYjQ0MjFhYTg3Yzg4M2UzMHAxMA',
    
  })
  module.exports = redisClient;