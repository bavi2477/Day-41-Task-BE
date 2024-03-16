import express from 'express';
import { loginUser, registerUser, requestPasswordReset, resetPassword} from '../Controllers/userController.js';

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/forgot-password', requestPasswordReset)
router.post('/reset-password/:token', resetPassword)
router.get('/reset-password/:token', (req, res) => {
    const { token } = req.params;
    res.redirect(`https://day-41-task-be.onrender.com/reset-password/${token}`);
});

export default router;