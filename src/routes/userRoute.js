import express from 'express'
import upload from "../middleware/multerMiddleware.js";
import roleMiddleware from '../middleware/roleMiddleware.js';
import { authMiddleware } from '../middleware/authMiddleware.js';

const userRouter = new express.Router();
userRouter.use(authMiddleware,roleMiddleware.isUser);


export {userRouter};