import Queue from 'bull';

export const helloQueue = new Queue('hello-queue', {
  redis: {
    host: process.env.REDIS_HOST || 'localhost',
    port: Number(process.env.REDIS_PORT) || 6379,
  },
}); 