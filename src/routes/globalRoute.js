import express from 'express'
import authController from '../global/controller/authController.js'
import { authMiddleware } from "../middleware/authMiddleware.js"
import { verifikasiMiddleware } from "../middleware/verifikasiMiddleware.js"
import upload from "../middleware/multerMiddleware.js"
import sidebarController from '../global/controller/sidebarController.js'
import accountController from '../global/controller/accountController.js';
import companyController from '../areas/company/controller/companyController.js';
import companySegmentController from '../areas/company/controller/companySegmentController.js';

import distroPOMasterIncentiveRoute from '../areas/distro-po/routes/distroPOMasterIncentiveRoute.js';
import distroPOReportRoute from '../areas/distro-po/routes/distroPOReportRoute.js';


const globalRouter = new express.Router();

// Public API for company segments
globalRouter.get('/api/public/company-segments', companySegmentController.getAllCompanySegments);

globalRouter.get("/api", (req, res) => {
  res.status(200).json({
    message: "API is running",
    status: "Success",
  });
});

globalRouter.post("/api/forgotPasswordSendingEmail", accountController.sendingEmailResetPassword);
globalRouter.post("/api/forgotPassword", accountController.resetPassword);
globalRouter.post("/api/updatePassword", accountController.updatePassword);
globalRouter.post("/api/users/register", authController.register);
globalRouter.post("/api/users/login", authController.login);
globalRouter.use(verifikasiMiddleware);
globalRouter.post("/api/users/OTP", authController.otpSending);
globalRouter.post("/api/users/OTPVerification", authController.otpVerification);
globalRouter.post("/api/users/OTPRegistrationVerification", authController.otpRegistrationVerification);

globalRouter.use(authMiddleware)
globalRouter.use('/api/distro-po/masterincentive', distroPOMasterIncentiveRoute);
globalRouter.use('/api/distro-po/report', distroPOReportRoute);
// Return all companies for dropdowns
globalRouter.get('/api/company', companyController.getAllCompaniesController);
globalRouter.get("/api/users/sidebar", sidebarController.getMenuSidebar);
globalRouter.get("/api/users/profile", accountController.getProfile);
globalRouter.patch("/api/users/profile", upload.single("profileImage"), accountController.updateProfile);
globalRouter.patch("/api/users/changePassword", accountController.updatePassword);
globalRouter.post("/api/users/logout", authController.logout);

export { globalRouter };