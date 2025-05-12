import { Request, Response } from "express";
import UserService from "../services/user.service";
const userService = new UserService();

export default class AuthController {
  async handleLogin(request: Request, response: Response): Promise<Response> 
  {
    try {
      const user = await userService.login(request.body);
      return response.status(201).json(user);
    } catch (error) {
      return response.status(400).json(error); 
    }
  }
}