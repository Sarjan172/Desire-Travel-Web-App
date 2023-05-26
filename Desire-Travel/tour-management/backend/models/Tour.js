import { urlencoded } from "express";
import mongoose from "mongoose";

const tourSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    city: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    hotel1title: {
      type: String,
      required: true,
      unique: true,
    },
    hotel2title: {
      type: String,
      required: true,
      unique: true,
    },
    distance: {
      type: Number,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    hotel1photo: {
      type: String,
      required: true,
    },
    hotel2photo: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    hotel1price: {
      type: Number,
      required: true,
    },
    hotel2price: {
      type: Number,
      required: true,
    },
    hotel1loc: {
      type: String,
      required: true,
    },
    hotel2loc: {
      type: String,
      required: true,
    },
    maxGroupSize: {
      type: Number,
      required: true,
    },

    reviews: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Review",
      },
    ],

    featured: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Tour", tourSchema);









