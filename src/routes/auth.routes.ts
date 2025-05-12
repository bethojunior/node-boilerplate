import { Router } from 'express';
import AuthController from '../http/controllers/auth.controller';
import { validateLogin } from '../http/dto/auth/login';

const authRouter = Router();
const authController = new AuthController();

authRouter.post('/login', validateLogin, authController.handleLogin);

export { authRouter }; 