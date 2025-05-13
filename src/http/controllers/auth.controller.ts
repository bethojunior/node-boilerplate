import { injectable, inject } from "tsyringe";
import { Request, Response } from "express";
import UserService from "../services/user.service";

@injectable()
export default class AuthController {
  constructor(
    @inject(UserService)
    private userService: UserService
  ) {}

  async handleLogin(request: Request, response: Response): Promise<Response> 
  {
    try {
      const user = await this.userService.login(request.body);
      return response.status(201).json(user);
    } catch (error) {
      return response.status(400).json(error); 
    }
  }
}