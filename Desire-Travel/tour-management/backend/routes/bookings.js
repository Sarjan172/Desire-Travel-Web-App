import express from "express"
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js"
import { createBooking, deleteBooking, getAllBooking, getBooking } from "../controllers/bookingController.js"

const router = express.Router()

router.post('/', verifyUser, createBooking)
router.get('/:id',  getBooking)
router.get('/',  getAllBooking)
router.delete('/:id', deleteBooking);


export default router


