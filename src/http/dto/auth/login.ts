import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';

const loginSchema = z.object({
  email: z.string().email('Email inválido'),
  password: z.string().min(6, 'A senha deve ter no mínimo 6 caracteres')
});

export const validateLogin = (request: Request, response: Response, next: NextFunction) => {
  try {
    loginSchema.parse(request.body);
    return next();
  } catch (error) {
    if (error instanceof z.ZodError) {
      return response.status(400).json({
        message: 'Dados inválidos',
        errors: error.errors.map(err => ({
          field: err.path.join('.'),
          message: err.message
        }))
      });
    }
    return response.status(500).json({ message: 'Erro interno do servidor' });
  }
}; 