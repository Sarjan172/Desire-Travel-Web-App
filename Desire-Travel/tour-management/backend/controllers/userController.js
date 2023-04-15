import User from "../models/User.js";

//create new user
export const createUser = async (req, res) => {
    const newUser = new User(req.body);

    try {
        const savedUser = await newUser.save();
        res
            .status(200)
            .json({
                success: true,
                message: 'Sucessfully created',
                data: savedUser,
            });
    } catch (err) {
        res
            .status(500)
            .json({
                success: false,
                message: 'Failed to create. Try again'
            });
    }
};

//update User
export const updateUser = async (req, res) => {
    const id = req.params.id

    try {
        const updatedUser = await User.findByIdAndUpdate(id, {
            $set: req.body
        }, { new: true })
        res
            .status(200)
            .json({
                success: true,
                message: 'Sucessfully updated',
                data: updatedUser,
            });
    } catch (err) {
        res
            .status(500)
            .json({
                success: false,
                message: 'failed to update',
            });

    }
};

//delete user
export const deleteUser = async (req, res) => {
    const id = req.params.id

    try {
        await User.findByIdAndDelete(id)
        res
            .status(200)
            .json({
                success: true,
                message: 'Sucessfully deleted',
            });
    } catch (err) {
        res
            .status(500)
            .json({
                success: false,
                message: 'failed to delete',
            });

    }
};

//getSingle user
export const getSingleUser = async (req, res) => {
    const id = req.params.id

    try {
        const user = await User.findById(id)
        res
            .status(200)
            .json({
                success: true,
                message: 'Sucessfull',
                data: user,
            });
    } catch (err) {
        res
            .status(404)
            .json({
                success: false,
                message: 'User Not found',
            });

    }
};

//getAll user
export const getAllUser = async (req, res) => {

    try {
        const users = await User.find({})

        res.status(200).json({
            success: true,
            message: 'Sucessfull',
            data: users,
        })
    } catch (err) {
        res
            .status(404)
            .json({
                success: false,
                message: 'User Not found',
            });
    }
};

export const forgotPassword = async (req, res, next) => {
    const { email } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: 'User not found with this email address',
            });
        }

        //const resetToken = user.generatePasswordResetToken();
        await user.save({ validateBeforeSave: false });

        const resetUrl = `http://${req.headers.host}/reset-password`;

        const message = `You are receiving this email because you (or someone else) has requested the reset of your password. Please click on the following link to complete the process:\n\n${resetUrl}\n\nIf you did not request this, please ignore this email and your password will remain unchanged.`;

        await sendMail({
            email: user.email,
            subject: 'Password reset',
            message,
        });

        res.status(200).json({
            success: true,
            message: `An email has been sent to ${user.email} with further instructions`,
        });
    } catch (error) {
        console.error(error);
        // user.resetPasswordToken = undefined;
        // user.resetPasswordExpires = undefined;
       // await user.save({ validateBeforeSave: false });
        return res.status(500).json({
            success: false,
            message: 'Something went wrong while sending email',
        });
    }
};

