import { Request, Response } from "express";
import UserService from "../services/user.service";
const service = new UserService();

export default class UserController {
  async store(request: Request, response: Response): Promise<Response> 
  {
    try {
      const user = await service.store(request.body);
      return response.status(201).json(user);
    } catch (error) {
      return response.status(400).json(error); 
    }
  }
}