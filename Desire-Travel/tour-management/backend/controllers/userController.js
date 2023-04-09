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
