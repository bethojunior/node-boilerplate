import { UserEntity } from "../../@types/user/user.entity";
import UserRepository from "../repositories/user.repository";
import { HelloJob } from "../../jobs/hello.job";

const repository = new UserRepository();
const helloJob = new HelloJob();

export default class UserService {
  async store(props: any): Promise<UserEntity> {
    return await repository.store(props);
  }

  async login(props: {email: string, password: string}) {
    const result = await repository.login(props);
    
    await helloJob.execute({
      email: result.email
    });
    
    return result;
  }
}