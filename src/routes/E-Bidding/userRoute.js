// Public API for segments (for frontend)
import express from 'express'
import upload from "../../middleware/multerMiddleware.js";
import roleMiddleware from '../../middleware/roleMiddleware.js';
import { authMiddleware } from '../../middleware/authMiddleware.js';
import formL9Controller from '../../areas/form/controller/formL9Controller.js';
import companyController from '../../areas/company/controller/companyController.js';
import companySegmentController from '../../areas/company/controller/companySegmentController.js';


const userRouter = new express.Router();
// Public API for segments (for frontend)
userRouter.get('/public/company-segments', companySegmentController.getAllCompanySegments);
userRouter.use(authMiddleware,roleMiddleware.isUser);

userRouter.post("/company",upload.single("companyImage"), companyController.create);
userRouter.patch("/company",upload.single("companyImage"), companyController.update);
userRouter.get("/company/me", companyController.getCompanyByUserId)

//formL9
userRouter.post("/form-l9", formL9Controller.create);
userRouter.get("/form-l9/me", formL9Controller.getByUserId);
userRouter.put("/form-l9/:formL9Id", formL9Controller.update);
userRouter.get("/form-l9/:formL9Id", formL9Controller.getDetailByIdForUser);

export {userRouter};