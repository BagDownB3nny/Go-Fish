import { NextFunction, Request, Response} from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

interface DecodedToken {
    userId: string;
    email: string;
}

interface UserData {
    userId: string;
    email: string;
}

interface AuthRequest extends Request {
    userData?: UserData;
}

export const checkAuth = (req : AuthRequest, res : Response, next : NextFunction) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            console.log("No auth header");
            return res.status(401).json({ error: 'Authentication failed' });
        }
        const token = authHeader.split(' ')[1];
        const decodedToken: DecodedToken = jwt.verify(token, process.env.JWT_SECRET!) as DecodedToken;
        req.userData = { userId: decodedToken.userId, email: decodedToken.email };
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Authentication failed' });
    }
};