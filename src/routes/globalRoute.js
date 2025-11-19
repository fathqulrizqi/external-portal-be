import express from 'express'
import authController from '../global/controller/authController.js'
import {authMiddleware} from "../middleware/authMiddleware.js"
import upload from "../middleware/multerMiddleware.js"


const publicRouter = new express.Router();

  publicRouter.get("/api", (req, res) => {
  res.status(200).json({
    message: "API is running",
    status: "Success",
  });
  });
  
  publicRouter.post("/api/users/register",upload.fields([
    { name: "npwpImage", maxCount: 1 },
    { name: "deedImage", maxCount: 1 },
  ]), authController.register);


  publicRouter.post("/api/users/login", authController.login);
  
  publicRouter.use(authMiddleware)
  publicRouter.post("/api/users/OTP", authController.otpSending);
  publicRouter.post("/api/users/OTPVerification", authController.otpVerification);
  publicRouter.post("/api/users/logout", authController.logout);

export { publicRouter };