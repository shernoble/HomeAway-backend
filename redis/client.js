const { Redis } = require('@upstash/redis')

const redisClient = new Redis({
    url: 'https://complete-yak-34129.upstash.io',
    token: 'AYVRAAIjcDEzYTYyYzNhYzlmMGM0NjYyODU3MDg5MWMzNTZkNGVhM3AxMA',
    
  })
  module.exports = redisClient;