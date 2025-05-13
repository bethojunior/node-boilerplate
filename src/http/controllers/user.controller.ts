import { Request, Response } from "express";
import UserService from "../services/user.service";

export default class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async store(request: Request, response: Response): Promise<Response> 
  {
    try {
      const user = await this.userService.store(request.body);
      return response.status(201).json(user);
    } catch (error) {
      return response.status(400).json(error); 
    }
  }
}