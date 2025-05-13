import { injectable, inject } from "tsyringe";
import { UserEntity } from "../../@types/user/user.entity";
import UserRepository from "../repositories/user.repository";
import { HelloJob } from "../../jobs/hello.job";

@injectable()
export default class UserService {
  constructor(
    @inject(UserRepository)
    private userRepository: UserRepository,
    @inject(HelloJob)
    private helloJob: HelloJob
  ) {}

  async store(props: any): Promise<UserEntity> {
    return await this.userRepository.store(props);
  }

  async login(props: {email: string, password: string}) {
    const result = await this.userRepository.login(props);
    
    await this.helloJob.execute({
      email: result.email
    });
    
    return result;
  }
}