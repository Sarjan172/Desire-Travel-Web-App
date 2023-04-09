import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../controllers/userController.js';
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

export default router