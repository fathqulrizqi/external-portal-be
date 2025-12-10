import { PrismaClient } from '../../../../prisma/mainDB/@prisma/client-main/index.js';
const prisma = new PrismaClient();

// CREATE PO Header with items
async function createPO(header, items) {
  // Generate niterraPO number
  const now = new Date();
  const yyyy = now.getFullYear();
  const mm = String(now.getMonth() + 1).padStart(2, '0');
  // Count existing POs for this year/month
  const count = await prisma.Distro_PO_Header.count({
    where: {
      niterraPO: {
        startsWith: `Niterra/PO/${yyyy}${mm}/`
      }
    }
  });
  const seq = String(count + 1).padStart(3, '0');
  const niterraPO = `Niterra/PO/${yyyy}${mm}/${seq}`;

  // Remove vehicleId from items before saving
  const cleanItems = items.map(({ vehicleId, ...rest }) => rest);
  return prisma.Distro_PO_Header.create({
    data: {
      ...header,
      niterraPO,
      niterraSO: header.niterraSO,
      items: {
        create: cleanItems
      }
    },
    include: { items: true }
  });
}

// READ all PO Headers
async function getAllPOs() {
  return prisma.Distro_PO_Header.findMany({ include: { items: true } });
}

// READ single PO Header by id
async function getPOById(id) {
  if (!id || typeof id !== 'string') {
    throw new Error('PO uuid is required and must be a string');
  }
  return prisma.Distro_PO_Header.findFirst({ where: { uuid: id }, include: { items: true } });
}

// UPDATE PO Header and items
async function updatePO(id, header, items) {
  // Update header
  const headerRow = await prisma.Distro_PO_Header.findUnique({ where: { uuid: id } });
  if (!headerRow) throw new Error('PO not found');
  const headerId = headerRow.id;
  const updatedHeader = await prisma.Distro_PO_Header.update({
    where: { uuid: id },
    data: header
  });
  // Update items (delete old, create new for simplicity)
  await prisma.Distro_PO_Line.deleteMany({ where: { purchaseOrderId: headerId } });
  await prisma.Distro_PO_Line.createMany({
    data: items.map(item => ({ ...item, purchaseOrderId: headerId }))
  });
  return getPOById(id);
}

// DELETE PO Header and items
async function deletePO(id) {
  const headerRow = await prisma.Distro_PO_Header.findUnique({ where: { uuid: id } });
  if (!headerRow) throw new Error('PO not found');
  const headerId = headerRow.id;
  await prisma.Distro_PO_Line.deleteMany({ where: { purchaseOrderId: headerId } });
  return prisma.Distro_PO_Header.delete({ where: { uuid: id } });
}

// SUMMARY: PO by distributor, vehicleID, month/year
async function getPOSummary({ year, month }) {
  // Aggregate by distributor, month, year, and sum qty for each vehicleID
  const vehicleIDs = ["2W Ni", "2W PM", "4W Ni", "4W PM"];
  const where = {
    poDate: {
      gte: new Date(`${year}-01-01`),
      lt: new Date(`${Number(year) + 1}-01-01`)
    }
  };
  if (month) {
    where.poDate.gte = new Date(`${year}-${String(month).padStart(2, '0')}-01`);
    where.poDate.lt = new Date(`${year}-${String(Number(month) + 1).padStart(2, '0')}-01`);
  }
  const headers = await prisma.Distro_PO_Header.findMany({
    where,
    include: { items: true }
  });
  const summaryMap = {};
  headers.forEach(header => {
    const key = `${header.distributorName}|${month || ''}|${year}`;
    if (!summaryMap[key]) {
      summaryMap[key] = {
        distributorName: header.distributorName,
        month: month || '',
        year: year,
      };
      vehicleIDs.forEach(vID => {
        summaryMap[key][vID] = 0;
      });
    }
    header.items.forEach(item => {
      if (vehicleIDs.includes(item.vehicleCategory)) {
        summaryMap[key][item.vehicleCategory] += Number(item.qty) || 0;
      }
    });
  });
  return Object.values(summaryMap);
}

export {
  createPO,
  getAllPOs,
  getPOById,
  updatePO,
  deletePO,
  getPOSummary
};
