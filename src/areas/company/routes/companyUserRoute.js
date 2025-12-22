import express from 'express';
import { requireCompanyAdmin } from '../../../middleware/requireCompanyAdmin.js';
import { addUserToCompanyController } from '../controller/companyUserController.js';

const router = express.Router();

// Only company admins can add users to their company
router.post('/add-user', requireCompanyAdmin, addUserToCompanyController);

export default router;
