import express from 'express'
import authController from '../global/controller/authController.js'
import {authMiddleware} from "../middleware/authMiddleware.js"
import {verifikasiMiddleware} from "../middleware/verifikasiMiddleware.js"
import upload from "../middleware/multerMiddleware.js"
import sidebarController from '../global/controller/sidebarController.js'


const globalRouter = new express.Router();

  globalRouter.get("/api", (req, res) => {
  res.status(200).json({
    message: "API is running",
    status: "Success",
  });
  });
  
  globalRouter.post("/api/users/register",upload.fields([
    { name: "npwpImage", maxCount: 1 },
    { name: "deedImage", maxCount: 1 },
  ]), authController.register);


  globalRouter.post("/api/users/login", authController.login);
  globalRouter.use(verifikasiMiddleware);
  globalRouter.post("/api/users/OTP", authController.otpSending);
  globalRouter.post("/api/users/OTPVerification", authController.otpVerification);
  globalRouter.post("/api/users/OTPRegistrationVerification", authController.otpRegistrationVerification);

  globalRouter.use(authMiddleware)
  globalRouter.get("/api/sidebar", sidebarController.getMenuSidebar);
  globalRouter.post("/api/users/logout", authController.logout);

export { globalRouter };