import express from 'express'
import upload from "../../middleware/multerMiddleware.js";
import roleMiddleware from '../../middleware/roleMiddleware.js';
import { authMiddleware } from '../../middleware/authMiddleware.js';
import companySegmentController from '../../areas/company/controller/companySegmentController.js';
import roleController from '../../areas/user/controller/roleController.js';
import accessController from '../../areas/user/controller/accessController.js';
import formL9Controller from '../../areas/form/controller/formL9Controller.js';

const adminRouter = new express.Router();
adminRouter.use(authMiddleware,roleMiddleware.isAdmin);

adminRouter.post("/companySegments", companySegmentController.createCompanySegment);
adminRouter.get("/companySegments", companySegmentController.getAllCompanySegments);
adminRouter.get("/companySegments/:segmentId", companySegmentController.getCompanySegmentById); 
adminRouter.put("/companySegments/:segmentId", companySegmentController.updateCompanySegment); 
adminRouter.delete("/companySegments/:segmentId", companySegmentController.deleteCompanySegment);

adminRouter.post("/roles", roleController.createRole);
adminRouter.get("/roles", roleController.getAllRoles);
adminRouter.get("/roles/:roleId", roleController.getRoleById);
adminRouter.put("/roles/:roleId", roleController.updateRole);
adminRouter.delete("/roles/:roleId", roleController.deleteRole);

//Access
adminRouter.post("/accesses", accessController.createAccess);
adminRouter.get("/accesses", accessController.getAllAccess);
adminRouter.get("/accesses/:accessId", accessController.getAccessById);
adminRouter.put("/accesses/:accessId", accessController.updateAccess);
adminRouter.delete("/accesses/:accessId", accessController.deleteAccess);

//formL9
adminRouter.get("/form-l9", formL9Controller.getAll);
adminRouter.get("/form-l9/:formL9Id", formL9Controller.getDetailByIdForAdmin);
adminRouter.delete("/form-l9/:formL9Id", formL9Controller.destroy);

export {adminRouter};