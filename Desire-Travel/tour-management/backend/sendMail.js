const nodemailer = require('nodemailer');
const { User } = require('./models/User');

// Request password reset
exports.requestPasswordReset = async (req, res) => {
    const { email } = req.body;
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({ message: 'User not found' });
    }

    // Generate reset token
   // const resetToken = user.generateResetToken();
    await user.save();

    // Send password reset email
    const transporter = nodemailer.createTransport({
        service: 'hotmail',
        auth: {
            user: process.env.EMAIL_ADDRESS,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    const mailOptions = {
        from: process.env.EMAIL_ADDRESS,
        to: email,
        subject: 'Password Reset Request',
        text: `Please click on this link to reset your password: ${process.env.BASE_URL}/reset-password/${resetToken}`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err);
            return res.status(500).json({ message: 'Failed to send password reset email' });
        }

        res.json({ message: 'Password reset email sent' });
    });
};

// Reset password
exports.resetPassword = async (req, res) => {
    const { resetToken, password } = req.body;
    const user = await User.findOne({ resetToken });

    if (!user) {
        return res.status(404).json({ message: 'Invalid or expired reset token' });
    }

    if (user.resetTokenExpires < Date.now()) {
        return res.status(404).json({ message: 'Invalid or expired reset token' });
    }

    user.password = password;
    user.resetToken = undefined;
    user.resetTokenExpires = undefined;
    await user.save();

    res.json({ message: 'Password reset successfully' });
};
