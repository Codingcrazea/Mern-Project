import express from "express";
var route = express.Router();

import * as otpController from '../controller/otpController.js'

route.post("/check_otp",otpController.check_otp);

export default route;