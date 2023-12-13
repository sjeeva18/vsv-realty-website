import express from "express";
import {
  bookVisit,
  cancelBooking,
  createUser,
  getAllBookings,
  getAllFavourites,
  toFav,
} from "../Controllers/userCntrl.js";
import jwtCheck from "../Config/auth0Config.js";
const router = express.Router();

router.post("/register", jwtCheck, createUser);

export { router as userRoute };
