import express from 'express';
import distroPOReportController from '../controller/distroPOReportController.js';

const router = express.Router();
router.get('/report', distroPOReportController.getReport);

export default router;
