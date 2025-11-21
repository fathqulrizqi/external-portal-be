import express from 'express'
import upload from "../middleware/multerMiddleware.js";
import roleMiddleware from '../middleware/roleMiddleware.js';
import { authMiddleware } from '../middleware/authMiddleware.js';
import formL9Controller from '../areas/form/controller/formL9Controller.js';

const userRouter = new express.Router();
userRouter.use(authMiddleware,roleMiddleware.isUser);

//formL9
userRouter.post("/form-l9", formL9Controller.create);
userRouter.get("/form-l9/me", formL9Controller.getByUserId);
userRouter.put("/form-l9/:formL9Id", formL9Controller.update);
userRouter.get("/form-l9/:formL9Id", formL9Controller.getDetailByIdForUser);

export {userRouter};