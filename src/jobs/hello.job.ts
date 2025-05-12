import { Job } from 'bull';
import { helloQueue } from '../providers/bull/bull';

interface HelloJobData {
  email: string;
}

export class HelloJob {
  async execute(data: HelloJobData): Promise<void> {
    await helloQueue.add(
      'hello',
      data,
      {
        delay: 10000,
        attempts: 3,
        backoff: {
          type: 'exponential',
          delay: 1000,
        },
      }
    );
  }
}

helloQueue.process('hello', async (job: Job<HelloJobData>) => {
  const { email } = job.data;
  console.log(`Hello! Login realizado com sucesso para o usuário ${email}!`);
}); 