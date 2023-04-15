import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser, forgotPassword } from '../controllers/userController.js';
const router = express.Router()

import { verifyUser } from '../utils/verifyToken.js';

//update user
router.put('/:id', verifyUser, updateUser);

//delete user
router.delete('/:id', verifyUser, deleteUser);

//getSingle user
router.get('/:id', verifyUser, getSingleUser);

//getAll user
router.get('/', verifyUser, getAllUser);
router.route("/forgot").post(forgotPassword);


export default router