
import Booking from "../models/Booking.js"


//create new booking
export const createBooking = async (req, res) => {
    const newBooking = new Booking(req.body)
    try {
        const savedBooking = await newBooking.save()

        res.status(200).json({
            sucess: true, message: "Your tour is booked",
            data: savedBooking
        })

    } catch (err) {
        res.status(500).json({
            sucess: false, message: "Internal server error"
        })
    };
};


//get single booking
export const getBooking = async (req, res) => {
    const id = req.params.id

    try {
        const book = await Booking.findById(id)

        res.status(200).json({
            sucess: true, message: "Sucessfull",
            data: book,
        })
    } catch (err) {
        res.status(404).json({
            sucess: true, message: "Not found",
        })
    };
};

//get all booking
export const getAllBooking = async (req, res) => {
    try {
        const books = await Booking.find({})

        res.status(200).json({
            sucess: true, message: "Sucessfull",
            data: books,
        })
    } catch (err) {
        res.status(500).json({
            sucess: true, message: "Internal server error",
        })
    };
};

export const deleteBooking = async (req, res) => {
    const id = req.params.id

    try {
        await Booking.findByIdAndDelete(id)
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
