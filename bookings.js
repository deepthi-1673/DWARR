import  express from "express";
import {verifyAdmin,verifyUser} from "../utils/verifyToken.js";
import {createBooking} from "../controllers/bookingController.js"
import {getBooking} from "../controllers/bookingController.js"
import {getAllBooking} from "../controllers/bookingController.js"

const router = express.Router();

router.post("/",verifyUser,createBooking);
router.get("/",verifyUser,getBooking);
router.get("/",verifyAdmin,getAllBooking);

export default router