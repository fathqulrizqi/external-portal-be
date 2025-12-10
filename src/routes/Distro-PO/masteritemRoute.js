// Route for MasterItem CRUD
import express from 'express';
import masteritemController from '../../areas/distro-po/controller/masteritemController.js';

const router = express.Router();
router.get('/', masteritemController.getAll);
router.post('/', masteritemController.create);
router.put('/:id', masteritemController.update);
router.delete('/:id', masteritemController.remove);

export default router;