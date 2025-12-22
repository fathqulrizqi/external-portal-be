import express from 'express';
import distroPOMasterIncentiveController from '../controller/distroPOMasterIncentiveController.js';

const router = express.Router();

router.get('/', distroPOMasterIncentiveController.getAll);
router.get('/:id', distroPOMasterIncentiveController.getById);
router.post('/', distroPOMasterIncentiveController.create);
router.put('/:id', distroPOMasterIncentiveController.update);
router.delete('/:id', distroPOMasterIncentiveController.delete);

export default router;
