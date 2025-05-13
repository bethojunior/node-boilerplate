import { Router } from 'express';
import { container } from 'tsyringe';
import AuthController from '../http/controllers/auth.controller';
import { validateLogin } from '../http/dto/auth/login';

const authRouter = Router();

const authController = container.resolve(AuthController);

authRouter.post('/login', validateLogin, authController.handleLogin.bind(authController));

export { authRouter };
