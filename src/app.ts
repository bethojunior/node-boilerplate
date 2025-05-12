import cluster from 'cluster';
import os from 'os';
import express from 'express';
import * as dotenv from 'dotenv';
import { router } from './routes';

dotenv.config();

const numCPUs = os.cpus().length;

if (cluster.isPrimary) {
  console.log(`Primary process ${process.pid} is running`);
  console.log(`Forking ${numCPUs} workers...`);

  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker ${worker.process.pid} died. Starting a new one...`);
    cluster.fork();
  });

} else {
  const app = express();

  app.use(express.json());
  app.use('/api', router);

  const port = process.env.APP_PORT || 3000;

  app.listen(port, () => {
    console.log(`Worker ${process.pid} is running on http://localhost:${port}`);
  });
}
