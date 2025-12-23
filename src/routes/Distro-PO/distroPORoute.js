
import express from 'express';
import masteritemRoute from './masteritemRoute.js';
import masterAchievementRoute from './masterAchievementRoute.js';
import masterItemPriceRoute from './masterItemPriceRoute.js';
import distroPOController from '../../areas/distro-po/controller/distroPOController.js';
import masterItemPriceHeaderRoute from './masterItemPriceHeaderRoute.js';
const router = express.Router();

// Always mount static/subresource routes before parameterized routes
router.use('/masteritem', masteritemRoute);
router.use('/masterachievement', masterAchievementRoute);
router.use(masterItemPriceRoute);
router.use(masterItemPriceHeaderRoute);

router.post('/', distroPOController.createPO);
router.get('/', distroPOController.getAllPOs);
router.get('/summary', distroPOController.getPOSummary);
router.put('/:id', distroPOController.updatePO);
router.delete('/:id', distroPOController.deletePO);

router.get('/:id', distroPOController.getPOById);
export default router;
