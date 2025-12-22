import { getMasterItemPrice } from '../../areas/distro-po/controller/distroPOMasterItemPriceController.js';
import express from 'express';
const router = express.Router();

// GET /api/distro-po/masteritem-price?itemId=...&customerCode=...
router.get('/masteritem-price', getMasterItemPrice);

export default router;
