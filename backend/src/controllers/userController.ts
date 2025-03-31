import { Request, Response, NextFunction } from 'express';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const loginUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { email, password } = req.body;

  try {
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return;
    }

    if (user.password !== password) {
      res.status(401).json({ message: 'Invalid password' });
      return;
    }

    res.status(200).json({ message: 'Login successful', user: { email: user.email } });
  } catch (error) {
    next(error); // Pass the error to the next middleware for centralized error handling
  }
};