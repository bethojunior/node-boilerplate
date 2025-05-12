import { UserEntity } from "../../@types/user/user.entity";
import pool from "../../database/handle";

export default class UserRepository {
  async store(props: UserEntity) {
    return props;
  }
  
  async login(props: {email: string, password: string}) {
    return props;
  }

  //exemplo simples de consulta
  async findAll() {
    const [rows] = await pool.query('SELECT * FROM users');
    return rows;
  }
}