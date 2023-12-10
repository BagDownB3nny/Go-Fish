import { Request, Response } from 'express';
import User from '../../models/user-model';
import bcrypt from 'bcryptjs';

export interface RegisterUserRequest extends Request {
    username: string;
    email: string;
    password: string;
}

export const registerUser = async (req: RegisterUserRequest, res: Response) => {
    try {
        const { username, email, password } = req.body;
        if (await User.findOne({ email })) {
            return res.status(409).json({ error: 'Email already exists' });
        }
        if (await User.findOne({ username })) {
            return res.status(409).json({ error: 'Username already exists' });
        }
        // Hash the password before saving it
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'Registration successful' });
    } catch (error) {
        res.status(500).json({ error: 'Registration failed' });
    }
};