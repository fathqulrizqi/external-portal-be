import express from 'express';
import masteritemRoute from './masteritemRoute.js';
import distroPOController from '../../areas/distro-po/controller/distroPOController.js';
const router = express.Router();

// Always mount static/subresource routes before parameterized routes
router.use('/masteritem', masteritemRoute);

// PO CRUD routes
router.post('/', distroPOController.createPO);
router.get('/', distroPOController.getAllPOs);
router.put('/:id', distroPOController.updatePO);
router.delete('/:id', distroPOController.deletePO);
// Get PO by id (must be last)
router.get('/:id', distroPOController.getPOById);
export default router;
