import { PrismaClient } from '../../../../prisma/mainDB/@prisma/client-main/index.js';
const prisma = new PrismaClient();

// Controller for getting all submitted price list headers
export async function getAllMasterItemPriceHeaders(req, res) {
  try {
    const headers = await prisma.Distro_PO_MasterItem_Price_Header.findMany({
      orderBy: { createdAt: 'desc' },
    }); // id is now uuid string
    res.json(headers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
