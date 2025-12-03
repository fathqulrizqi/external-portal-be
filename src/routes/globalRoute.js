import express from 'express'
import authController from '../global/controller/authController.js'
import {authMiddleware} from "../middleware/authMiddleware.js"
import {verifikasiMiddleware} from "../middleware/verifikasiMiddleware.js"
import upload from "../middleware/multerMiddleware.js"
import sidebarController from '../global/controller/sidebarController.js'
import accountController from '../global/controller/accountController.js'


const globalRouter = new express.Router();

  globalRouter.get("/api", (req, res) => {
  res.status(200).json({
    message: "API is running",
    status: "Success",
  });
  });
  
  globalRouter.post("/api/forgotPassword/" , accountController.sendingEmailResetPassword);
  globalRouter.post("/api/users/register", authController.register);
  globalRouter.post("/api/users/login", authController.login);
  globalRouter.use(verifikasiMiddleware);
  globalRouter.post("/api/users/OTP", authController.otpSending);
  globalRouter.post("/api/users/OTPVerification", authController.otpVerification);
  globalRouter.post("/api/users/OTPRegistrationVerification", authController.otpRegistrationVerification);

  globalRouter.use(authMiddleware)
  globalRouter.get("/api/user/sidebar", sidebarController.getMenuSidebar);
  globalRouter.get("/api/users/profile", accountController.getProfile);
  globalRouter.patch("/api/users/profile",upload.single("profileImage"), accountController.updateProfile);
  globalRouter.patch("/api/users/changePassword", accountController.updatePassword);
  globalRouter.post("/api/users/logout", authController.logout);

export { globalRouter };