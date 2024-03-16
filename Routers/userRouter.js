import express from 'express';
import { loginUser, registerUser, requestPasswordReset, resetPassword} from '../Controllers/userController.js';

const router = express.Router()

router.post('/register', registerUser)
router.post('/login', loginUser)
router.post('/forgot-password', requestPasswordReset)
router.post('/reset-password/:token', resetPassword)
router.get('/reset-password/:token', (req, res) => {
    const { token } = req.params;
    res.redirect(`http://localhost:5173/reset-password/${token}`);
});

export default router;