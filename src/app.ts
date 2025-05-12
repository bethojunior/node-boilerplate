import express from 'express';
import * as dotenv from 'dotenv';
import { router } from './routes';

dotenv.config();

const app = express();

app.use(express.json());

app.use('/api', router);

const port = process.env.APP_PORT;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
