import express, { Request, Response } from 'express';
import { RegisterUserRequest, registerUser } from '../controllers/user/register-user';
import { LoginUserRequest, loginUser } from '../controllers/user/login-user';

const router = express.Router();

router.post("/register", async function(req : Request, res : Response) {
    registerUser(req as RegisterUserRequest, res);
});

// Login endpoint
router.post('/login', async (req, res) => {
    loginUser(req as LoginUserRequest, res);
});

export default router;