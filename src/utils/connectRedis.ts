import { createClient } from 'redis';

const redisUrl = 'redis://localhost:6379';

const redisClient = createClient({
  url: redisUrl,
});

const connectRedis = async () => {
  try {
    await redisClient.connect();
    console.log('Redis connected');
    redisClient.set('try', 'Welcome to Express and TypeScript with Redis');
  } catch (error) {
    console.log(error);
    setTimeout(connectRedis, 5000);
  }
};

connectRedis();

export default redisClient;
