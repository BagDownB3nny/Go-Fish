import { Request, Response } from 'express';
import User from '../../models/user-model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

export interface LoginUserRequest extends Request {
  email: string;
  password: string;
}

// Login endpoint
export const loginUser =  async (req : LoginUserRequest, res : Response) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ error: 'Email does not exist' });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      return res.status(401).json({ error: 'Incorrect password' });
    }

    // Create a JWT token
    const token = jwt.sign({ userId: user._id, email: user.email }, process.env.JWT_SECRET!);

    res.status(200).json({ token, userId: user._id });
  } catch (error) {
    res.status(500).json({ error: 'Authentication failed' });
  }
};