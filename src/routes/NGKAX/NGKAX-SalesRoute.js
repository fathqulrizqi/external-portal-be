import express from 'express';
import { getSalesD365ImporFormSalesSOByDistroPO } from '../../areas/NGKAX/controller/NGKAX-SalesController.js';

const NGKAXrouter = express.Router();
NGKAXrouter.get('/d365-import-form-sales', getSalesD365ImporFormSalesSOByDistroPO);

export default NGKAXrouter;
