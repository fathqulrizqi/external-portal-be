import { PrismaClient } from '../../../../prisma/mainDB/@prisma/client-main/index.js';
const prisma = new PrismaClient();

// GET /api/distro-po/masteritem-price?itemId=...&customerCode=...
export async function getMasterItemPrice(req, res) {
  try {
    const { itemId, customerCode } = req.query;
    if (!itemId) return res.status(400).json({ error: 'itemId is required' });
    // Only consider price lines with activationDate <= today
    const today = new Date();
    let priceLine = null;
    if (customerCode) {
      priceLine = await prisma.Distro_PO_MasterItem_Price_Line.findFirst({
        where: {
          itemId,
          customerCode,
          activationDate: { lte: today },
        },
        orderBy: [
          { activationDate: 'desc' },
          { id: 'desc' }
        ]
      });
    }
    // 2. Fallback to 'All' if not found
    if (!priceLine) {
      priceLine = await prisma.Distro_PO_MasterItem_Price_Line.findFirst({
        where: {
          itemId,
          customerCode: 'All',
          activationDate: { lte: today },
        },
        orderBy: [
          { activationDate: 'desc' },
          { id: 'desc' }
        ]
      });
    }
    if (!priceLine) return res.json({ price: null });
    return res.json({ price: priceLine.price });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
