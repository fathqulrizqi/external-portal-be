import { NGKAXdb } from '../../../config/database.js';

export const getSalesD365ImporFormSalesSOByDistroPO = async (req, res) => {
  try {
    const { poNumber } = req.query;
    let where = {};
        if (poNumber) {
          // Use trimmed matching (remove mode: 'insensitive' for compatibility)
          where.CustomerReference = poNumber.trim();
        }
    const data = await NGKAXdb.sales_D365ImporForm_Sales.findMany({ where });
    // Get only unique SalesOrder values
    const seen = new Set();
    const mapped = [];
    for (const item of data) {
      const soNumber = item.SalesOrder || '';
      if (soNumber && !seen.has(soNumber)) {
        seen.add(soNumber);
        mapped.push({ soNumber });
      }
    }
    res.json({ success: true, data: mapped });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
