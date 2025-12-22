import express from 'express';
import { getAllMasterItemPriceHeaders } from '../../areas/distro-po/controller/masterItemPriceHeaderController.js';
const router = express.Router();

// GET /api/distro-po/masteritem-price-headers
router.get('/masteritem-price-headers', getAllMasterItemPriceHeaders);

export default router;
