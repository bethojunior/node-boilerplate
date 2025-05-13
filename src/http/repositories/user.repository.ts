import { injectable, inject } from "tsyringe";
import { UserEntity } from "../../@types/user/user.entity";
import PrismaProvider from "../../providers/prisma/prisma.provider";

@injectable()
export default class UserRepository {
  async store(props: UserEntity) {
    return props;
  }
  
  async login(props: { email: string; password: string }) {
    return props;
  }

  async findAll() {
    try {
      return await PrismaProvider.use(async (prisma) => {
        return await prisma.user.findMany();
      });
    } catch (error) {
      throw new Error("Error finding all users: " + error);
    }
  }
}
